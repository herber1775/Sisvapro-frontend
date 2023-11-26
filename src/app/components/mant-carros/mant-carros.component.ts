import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MarcaDto, carroCreateDto, carroDto } from 'src/app/models/carro.types';
import { CarroService} from 'src/app/services/carro.service';

@Component({
  selector: 'app-mant-carros',
  templateUrl: './mant-carros.component.html',
  styleUrls: ['./mant-carros.component.css']
})

export class MantCarrosComponent implements OnInit {
  public lstCarros: carroDto[] = [];
  public loading = false;
  public formCarro!: FormGroup;
  public valid: boolean | null = null;

  objMarca: MarcaDto[] = [
    { idmarca: 1, descripcion: "Audi" },
    { idmarca: 2, descripcion: "Suzuki"},
    { idmarca: 3, descripcion: "Haval"},
    { idmarca: 4, descripcion: "Great Wall"},
    { idmarca: 5, descripcion: "Honda"},
    { idmarca: 6, descripcion: "Mazda"},
    { idmarca: 7, descripcion: "Changan"},
    { idmarca: 8, descripcion: "Mercedes-Benz"},
    { idmarca: 9, descripcion: "Toyota"},
    { idmarca: 10, descripcion: "Mitsubishi"},
  ];

  constructor(
    private carroService: CarroService,
    private formBuilder: FormBuilder,
    ) {}
  
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
        objMarca: this.formBuilder.group({
          idmarca: ['', Validators.required],
          descripcion: ['', Validators.required],
        }),
        combustible: ['', Validators.required],
      
       
      });
      this.getDataCarro();
    }

  public limpiarForm(): void{
    this.formCarro.reset();
  }

  getDataCarro() {
    this.carroService.getAll().subscribe (
      (carro: carroDto[]) => {
        this.lstCarros = carro;
        console.log(carro);
      });
    }


  guardarCarro(){
    /*const id = this.lstCarros.map((carro: carroDto) => carro.id);

    if (id.includes(this.formCarro.get('id')?.value)) {
      this.valid = false;
    } else {
      this.valid = true;
    }*/

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
          idmarca: this.formCarro.get('objMarca.idmarca')?.value,
          descripcion: this.formCarro.get('objMarca.descripcion')?.value,
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
    // setTimeout(() => this.getDataCarro(), 350);
    
  }

  actualizarCarro() {

  }
  
  ecargarCarro(id:any) {

  }




 eliminarCarro(id:number) {
  const confirmarEliminacion = confirm('Eliminar?');
  if (confirmarEliminacion) {
    this.carroService.deleteCarro(id).subscribe((result) => {
        console.log("Carro eliminado", result);
        // this.getDataCarro();
      });
  }
 }
}