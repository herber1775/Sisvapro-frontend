import { Component } from '@angular/core';
import { empleadoDto } from 'src/app/models/empleado.types';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-consult-empleado',
  templateUrl: './consult-empleado.component.html',
  styleUrls: ['./consult-empleado.component.css']
})
export class ConsultEmpleadoComponent {

  dataempl: any[]=[];
  EmpleadoArray: empleadoDto[]=[]

  constructor(
    private apiService: EmpleadoService,
    ){}
    

    ngOnInit(): void {
      this.llenarData();
   } 

   llenarData(){
    this.apiService.getData().subscribe(data=>{
      this.dataempl=data;
      this.EmpleadoArray=data;
      console.log(this.dataempl);
      console.log(this.EmpleadoArray);
      HTMLFormControlsCollection
    })
}

}
