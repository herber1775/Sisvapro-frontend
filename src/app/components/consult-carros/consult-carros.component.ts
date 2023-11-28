import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { carroDto } from 'src/app/models/carro.types';
import { CarroService } from 'src/app/services/carro.service';
import { BuscarCarro } from './BuscarCarro';

@Component({
  selector: 'app-consult-carros',
  templateUrl: './consult-carros.component.html',
  styleUrls: ['./consult-carros.component.css']
})
export class ConsultCarrosComponent implements OnInit{
  data: any[]=[];
  marcas: any[] = [];
  carroArray: carroDto[]=[]
  marcaElegida: any = null;

  busqueda: BuscarCarro = {
    marca: '',
    modelo: ''
  }

  ngOnInit(): void {
    this.listarMarcas();
    this.llenarData();
  }
  
  constructor(private apiService: CarroService){}

  llenarData(){
    this.apiService.getAll().subscribe(data=>{
      this.data= data;
      this.carroArray=data;
    })
  }

  formCarro= new FormGroup({
    id: new FormControl(''),
    desripcion: new FormControl(''),
    modelo: new FormControl(''),
    origen: new FormControl(''),
    combustible: new FormControl(''),
    precio: new FormControl(''),
    stock: new FormControl(''),
    anio: new FormControl(''),
    nrserie: new FormControl(''),
    objMarca: new FormControl('')
  })

  listarMarcas(): void {
    this.apiService.filtrarPorMarca().subscribe(
      data => {
        this.marcas = data;
      },
      err => {
        console.log(err);
      }
    )
  }

  listaCarros(marca:string): void {
    this.apiService.buscarCarro(marca).subscribe(
      data => {
        this.data = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onChangeMarca(): void {
    if (this.marcaElegida) {
      console.log(this.marcaElegida)
      this.busqueda.marca =  this.marcaElegida;
      this.listaCarros(this.busqueda.marca);
    } else {
      this.busqueda.marca = '';
      //this.llenarData();
    }
    console.log(this.marcaElegida)

  }


}
