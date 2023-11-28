import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-consult-cliente',
  templateUrl: './consult-cliente.component.html',
  styleUrls: ['./consult-cliente.component.css']
})
export class ConsultClienteComponent implements OnInit{

  dataCli: any[]=[];

  ngOnInit(): void {
    this.llenarData();
  }
  
  constructor(private apiService: ClienteService){}

  llenarData(){
    this.apiService.getAll().subscribe(datacli=>{
      this.dataCli= datacli;
    })
  }

}
