import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { carroDto } from 'src/app/models/carro.types';
import { CarroService} from 'src/app/services/carro.service';

@Component({
  selector: 'app-mant-carros',
  templateUrl: './mant-carros.component.html',
  styleUrls: ['./mant-carros.component.css']
})

export class MantCarrosComponent implements OnInit {

  public carros: any = [];
  public loading = false;
  public formCarro!: FormGroup;

  constructor(
    private carroService: CarroService,
    private formBuilder: FormBuilder,
    ) {}
  
  ngOnInit(): void {

    this.formCarro = this.formBuilder.group({
      descripcion: ['', Validators.required],
      nmodelo: ['', Validators.required],
      origen: ['', Validators.required],
      combustible: ['', Validators.required],
      precio: ['', Validators.required],
      stock: ['', Validators.required],
      anio: ['', Validators.required],
      nrSerie: ['', Validators.required],
      id_marca: ['']
    })
    
    this.getDataCarro();

  }

  public limpiarForm(): void{
    const formCar = this.formCarro.value;
    for(const carro in formCar){
      this.formCarro.get(carro)?.reset();
    }
  }

  async getDataCarro() {
    this.carroService.getAll().subscribe(
      (carro: carroDto) => {
        this.carros = carro;
        console.log(carro);
      },
      error => {
        console.error('Error fetching carro data:', error);
      }
    );
  }

  guardarCarro() {
    
  }






}
