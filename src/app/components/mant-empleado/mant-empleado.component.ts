import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmpleadoService } from './../../services/empleado.service';
import { EmpleadoCreateDto, EmpleadoDto, TipoDto } from 'src/app/models/empleado.types';

@Component({
  selector: 'app-mant-empleado',
  templateUrl: './mant-empleado.component.html',
  styleUrls: ['./mant-empleado.component.css']
})
export class MantEmpleadoComponent implements OnInit {
  public lstEmpleados: EmpleadoDto[] = [];
  public formEmpleado!: FormGroup;
  public valid: boolean | null = null;

  tipos: TipoDto[] = [
    { idTipo: 1, descrip: "Administrador" },
    { idTipo: 2, descrip: "Empleado" }
  ];

  constructor(
    private empleadoService: EmpleadoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formEmpleado = this.formBuilder.group({
      idEmpleado: [''],
      dni: ['', Validators.required],
      nom: ['', Validators.required],
      ape: ['', Validators.required],
      tel: [''],
      user: ['', Validators.required],
      clave: ['', Validators.required],
      img: [''],
      objTipo: [null, Validators.required],
    });
    this.getDataEmpleado();
  }

  public limpiarForm(): void {
    this.formEmpleado.reset();
  }

  getDataEmpleado() {
    this.empleadoService.getAll().subscribe(
      (empleados: EmpleadoDto[]) => {
        this.lstEmpleados = empleados;
      }
    );
  }

  guardarEmpleado() {
    const empleadoDni = this.lstEmpleados.map((emple: EmpleadoDto) => emple.dni);
  
    if (empleadoDni.includes(this.formEmpleado.get('dni')?.value)) {
      this.valid = false;
    } else {
      this.valid = true;
    }
  
    if (this.formEmpleado.valid && this.valid) {
      const nuevoEmpleado: EmpleadoCreateDto = {
        dni: this.formEmpleado.get('dni')?.value,
        nom: this.formEmpleado.get('nom')?.value,
        ape: this.formEmpleado.get('ape')?.value,
        tel: this.formEmpleado.get('tel')?.value,
        user: this.formEmpleado.get('user')?.value,
        img: this.formEmpleado.get('img')?.value,
        clave: this.formEmpleado.get('clave')?.value,
        objTipo: this.formEmpleado.get('objTipo')?.value || 0,
      };
  
      this.empleadoService.createEmpleado(nuevoEmpleado).subscribe(
        (respuesta: EmpleadoCreateDto) => {
          console.log('Empleado creado', respuesta);
          this.getDataEmpleado();
        },
        (error) => {
          console.error('Error al crear cliente', error);
        }
      );
  
      this.limpiarForm();
      setTimeout(() => this.getDataEmpleado(), 350);
    }
  }

  ActualizarEmpleado() {
    console.log(this.formEmpleado.value);
  }

  editarEmpleado(elemento: EmpleadoDto) {
    // Implementa la lógica de edición si es necesario
  }

  public eliminarEmpleado(empleado: EmpleadoDto) {
    const confirmarEliminacion = confirm('Eliminar?');
    if (confirmarEliminacion) {
      const empleadoDeleteDto: any = {
        idEmpleado: empleado.idEmpleado
      };
  
      this.empleadoService.deleteEmpleado(empleadoDeleteDto).subscribe(
        (empleado) => {
          console.log("Empleado eliminado", empleado);
          this.getDataEmpleado();
        }
      );
    }
  }


}