import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { EmpleadoService } from './../../services/empleado.service';
import { EmpleadoCreateDto, EmpleadoDto, EmpleadoUpdateDto, TipoDto } from 'src/app/models/empleado.types';

@Component({
  selector: 'app-mant-empleado',
  templateUrl: './mant-empleado.component.html',
  styleUrls: ['./mant-empleado.component.css']
})
export class MantEmpleadoComponent implements OnInit {
  public lstEmpleados: EmpleadoDto[] = [];
  public formEmpleado!: FormGroup;
  public valid: boolean | null = null;

  objTipo: TipoDto[] = [
    { idTipo: 1, descrip: "Administrador" },
    { idTipo: 2, descrip: "Vendedor" }
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
      objTipo: [null, Validators.required]
      // objTipo: this.formBuilder.group({
      //   idTipo: ['', Validators.required],
      //   descrip: ['', Validators.required],
      // })
    });
    this.getDataEmpleado();
  }

  public limpiarForm(): void {
    // this.formEmpleado.reset();
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
    empleadoDni.map((element: any) => {
      if (element != this.formEmpleado.get('dni')?.value) {
        this.valid = true;
        console.log("diferente")
      } else {
        this.valid = false;
        console.log("(┬┬﹏┬┬)")
      }
    })

    if (this.formEmpleado.valid && this.valid) {
      const nuevoEmpleado: EmpleadoCreateDto = {
        dni: this.formEmpleado.get('dni')?.value,
        nom: this.formEmpleado.get('nom')?.value,
        ape: this.formEmpleado.get('ape')?.value,
        tel: this.formEmpleado.get('tel')?.value,
        user: this.formEmpleado.get('user')?.value,
        img: this.formEmpleado.get('img')?.value,
        clave: this.formEmpleado.get('clave')?.value,
        objTipo: {
          idTipo: this.formEmpleado.get('objTipo')?.value,
          descrip: "",
        },

        // objTipo: this.formEmpleado.get('objTipo')?.value
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

  async ActualizarEmpleado() {
  if (this.formEmpleado.valid) {
    const datos: EmpleadoUpdateDto = {
      idEmpleado: this.formEmpleado.get('idEmpleado')?.value,
      dni: this.formEmpleado.get('dni')?.value,
      nom: this.formEmpleado.get('nom')?.value,
      ape: this.formEmpleado.get('ape')?.value,
      tel: this.formEmpleado.get('tel')?.value,
      user: this.formEmpleado.get('user')?.value,
      clave: this.formEmpleado.get('clave')?.value,
      img: this.formEmpleado.get('img')?.value,
      objTipo: {
        idTipo: this.formEmpleado.get('objTipo')?.value,
        descrip: '', 
      },
    };

    this.empleadoService.updateEmpleado(datos).subscribe(
      (data: EmpleadoUpdateDto) => {
        console.log('Actualizado', data);
      },
      (error) => {
        console.error('Error al actualizar:', error);
      }
    );

    setTimeout(() => this.getDataEmpleado(), 350);
    this.limpiarForm();
  }
}

  public editarEmpleado(event: EmpleadoDto) {  
    this.formEmpleado.patchValue({
      idEmpleado: event.idEmpleado,
      dni: event.dni,
      nom: event.nom,
      ape: event.ape,
      tel: event.tel,
      user: event.user,
      clave: event.clave,
      img: event.img,
      objTipo: event.objTipo.idTipo 
    });

    console.log(event)
    

  }

  public eliminarEmpleado(empleado: any) {
    const confirmarEliminacion = confirm('Eliminar?');
    if (confirmarEliminacion) {
      this.empleadoService.deleteEmpleado(empleado.idEmpleado).subscribe(
        () => {
          console.log("Empleado eliminado", empleado);
          this.getDataEmpleado();
        },
        (error) => {
          console.error('Error al eliminar cliente', error);
        }
      );
    }
  }


}