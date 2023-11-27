import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoDto } from 'src/app/models/empleado.types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router){

  }

  ngOnInit(): void {
      this.obtenerNombre()
  }
  
  logout():void{
    this.authService.logout()
    sessionStorage.clear()
    this.router.navigate([''])
  }

  empleado = new EmpleadoDto()

  obtenerNombre(){
    let empleadoSession = sessionStorage.getItem("empleado")!;
    this.empleado = JSON.parse(empleadoSession);

  }
}
