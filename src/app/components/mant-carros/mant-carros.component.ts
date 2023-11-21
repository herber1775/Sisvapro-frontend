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
    { idmarca: 1, nomMarca: "Audi" },
    { idmarca: 2, nomMarca: "Suzuki"},
    { idmarca: 3, nomMarca: "Haval"},
    { idmarca: 4, nomMarca: "Great Wall"},
    { idmarca: 5, nomMarca: "Honda"},
    { idmarca: 6, nomMarca: "Mazda"},
    { idmarca: 7, nomMarca: "Changan"},
    { idmarca: 8, nomMarca: "Mercedes-Benz"},
    { idmarca: 9, nomMarca: "Toyota"},
    { idmarca: 10, nomMarca: "Mitsubishi"},
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
      combustible: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      anio: ['', Validators.required],
      nroSerie: ['', Validators.required],
      objMarca: this.formBuilder.group ({
        idmarca: ['', Validators.required],
        nomMarca: ['', Validators.required],
      })
    });  
    this.getDataCarro();}

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
          nomMarca: this.formCarro.get('objMarca.nomMarca')?.value,
    },

  };
  
    this.carroService.createCarro(nuevoCarro).subscribe (
    (respuesta: carroCreateDto) => {
      console.log('Carro creado', respuesta);
      this.getDataCarro();
    });
    
    this.limpiarForm();
    setTimeout(() => this.getDataCarro(), 350);
    
  }

  actualizarCarro() {

  }
  
  ecargarCarro(id:number) {

  }




 eliminarCarro(id:number) {
  const confirmarEliminacion = confirm('Eliminar?');
  if (confirmarEliminacion) {
    this.carroService.deleteCarro(id).subscribe((result) => {
        console.log("Carro eliminado", result);
        this.getDataCarro();
      });
  }
 }
}