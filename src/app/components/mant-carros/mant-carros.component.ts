import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { carroCreateDto, carroDeleteDto, carroDto, TipoDto, carroUpdateDto } from 'src/app/models/carro.types';
import { CarroService } from 'src/app/services/carro.service';

@Component({
  selector: 'app-mant-carros',
  templateUrl: './mant-carros.component.html',
  styleUrls: ['./mant-carros.component.css']
})

export class MantCarrosComponent implements OnInit {
  public lstCarros: carroDto[] = [];
  public formCarro!: FormGroup;
  public valid: boolean | null = null;

  objMarca: TipoDto[] = [
    { idmarca: 1, nomMarca: "Audi" },
    { idmarca: 2, nomMarca: "Suzuki" },
    { idmarca: 3, nomMarca: "Haval" },
    { idmarca: 4, nomMarca: "Great Wall" },
    { idmarca: 5, nomMarca: "Honda" },
    { idmarca: 6, nomMarca: "Mazda" },
    { idmarca: 7, nomMarca: "Changan" },
    { idmarca: 8, nomMarca: "Mercedes-Benz" },
    { idmarca: 9, nomMarca: "Toyota" },
    { idmarca: 10, nomMarca: "Mitsubishi" }
  ];//idmarca

  constructor(
    private carroService: CarroService,
    private formBuilder: FormBuilder,

  ) { }

  ngOnInit(): void {
    this.formCarro = this.formBuilder.group({
      id: [''],
      descripcion: ['', Validators.required],
      modelo: ['', Validators.required],
      origen: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      anio: ['', Validators.required],
      nroSerie: ['', Validators.required],
      objMarca: [null, Validators.required],
      // objMarca: this.formBuilder.group({
      //   idmarca: ['', Validators.required],
      //   descripcion: ['', Validators.required],
      // }),
      combustible: ['', Validators.required]


    });
    this.getDataCarro();
  }

  public limpiarForm(): void {
    this.formCarro.reset();
  }

  getDataCarro() {
    this.carroService.getAll().subscribe(
      (carro: carroDto[]) => {
        this.lstCarros = carro;
        console.log(this.lstCarros);
      }
    );
  }


  guardarCarro() {
    // const c = this.lstCarros.map((carro: carroDto) => carro.id);

    // if (id.includes(this.formCarro.get('id')?.value)) {
    //   this.valid = false;
    // } else {
    //   this.valid = true;
    // }
    console.log(this.formCarro.value, this.formCarro.valid)


    if (this.formCarro.valid) {
      const nuevoCarro: carroCreateDto = {
        descripcion: this.formCarro.get('descripcion')?.value,
        modelo: this.formCarro.get('modelo')?.value,
        origen: this.formCarro.get('origen')?.value,
        combustible: this.formCarro.get('combustible')?.value,
        precio: this.formCarro.get('precio')?.value,
        stock: this.formCarro.get('stock')?.value,
        anio: this.formCarro.get('anio')?.value,
        nroSerie: this.formCarro.get('nroSerie')?.value,
        objMarca: {
          idmarca: this.formCarro.get('objMarca')?.value,
          nomMarca: '',
        },

      };

      this.carroService.createCarro(nuevoCarro).subscribe(
        (respuesta: carroCreateDto) => {
          console.log('Carro creado', respuesta);
          this.getDataCarro();
        },
        (error) => {
          console.error('Error al crear el carro', error);
          // Agrega lógica de manejo de errores aquí
        }
      );
      this.limpiarForm();
      setTimeout(() => this.getDataCarro(), 350);
    }



    // setTimeout(() => this.getDataCarro(), 350);

  }

  async actualizarCarro() {

    if (this.formCarro.valid) {
      const datos: carroUpdateDto = {
        id: this.formCarro.get('id')?.value,
        descripcion: this.formCarro.get('descripcion')?.value,
        modelo: this.formCarro.get('modelo')?.value,
        origen: this.formCarro.get('origen')?.value,    
        precio: this.formCarro.get('precio')?.value,
        stock: this.formCarro.get('stock')?.value,
        nroSerie: this.formCarro.get('nroSerie')?.value,
        anio: this.formCarro.get('anio')?.value,
        objMarca: {
          idmarca: this.formCarro.get('objMarca')?.value,
          nomMarca: '', 
        },
        combustible: this.formCarro.get('combustible')?.value,
      };

  
      this.carroService.updateCarro(datos).subscribe(
        (data: carroUpdateDto) => {
          console.log('Actualizado', data);
        },
        (error) => {
          console.error('Error al actualizar:', error);
        }
      );
  
      setTimeout(() => this.getDataCarro(), 350);
      this.limpiarForm();
    }

  }

  public ecargarCarro(element: any) {
    this.formCarro.patchValue({
      descripcion : element.descripcion,
      modelo : element.modelo,
      origen : element.origen,
      combustible : element.combustible,
      precio : element.precio,
      stock : element.stock,
      anio : element.anio,
      nroSerie : element.nroSerie,
      objMarca : element.objMarca.idmarca
    })
    console.log(event)

  }




  eliminarCarro(data: carroDeleteDto) {
    console.log(data.id)
    const confirmarEliminacion = confirm('Eliminar?');
    if (confirmarEliminacion) {
      this.carroService.deleteCarro(data.id).subscribe(
        (dataEliminar) => {
          console.log("Empleado eliminado", dataEliminar);
          this.getDataCarro();
        },
        (error) => {
          console.error('Error al eliminar cliente', error);
        }
      );
    }
  }
}