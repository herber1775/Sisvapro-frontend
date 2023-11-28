import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-consult-empleado',
  templateUrl: './consult-empleado.component.html',
  styleUrls: ['./consult-empleado.component.css']
})
export class ConsultEmpleadoComponent implements OnInit{

  dataEmp: any[]=[];

  ngOnInit(): void {
    this.llenarData();
  }
  
  constructor(private apiService: EmpleadoService){}

  llenarData(){
    this.apiService.getAll().subscribe(data=>{
      this.dataEmp= data;
    })
  }

}
