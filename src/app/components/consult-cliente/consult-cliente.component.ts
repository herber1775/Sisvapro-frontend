import { Component, OnInit } from '@angular/core';
import {ClienteService} from 'src/app/services/cliente.service'
import { clienteDto} from 'src/app/models/cliente.types'

@Component({
  selector: 'app-consult-cliente',
  templateUrl: './consult-cliente.component.html',
  styleUrls: ['./consult-cliente.component.css']
})
export class ConsultClienteComponent implements OnInit{

  data: any[]=[];
  ClienteArray: clienteDto[]=[]

  constructor(
    private apiService: ClienteService,
    ){}

    ngOnInit(): void {
      this.llenarData();
   } 

   llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.data=data;
      this.ClienteArray=data;
      console.log(this.data);
      console.log(this.ClienteArray);
      HTMLFormControlsCollection
    })
}

}
