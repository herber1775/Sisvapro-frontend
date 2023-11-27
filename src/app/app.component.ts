import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SisvaproFrontend';

  constructor(private router:Router){}
  
  isLogged(): boolean{
    let empleadoSession = sessionStorage.getItem("empleado");
    if(empleadoSession!=null){
      return true;
    }
    return false;
  }
}
