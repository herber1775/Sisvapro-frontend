import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpleadoDto } from 'src/app/models/empleado.types';
import { Login } from 'src/app/models/login.types';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup = this.formBuilder.group({
    user: [""],
    clave: [""]
  })

  login = new Login()

  constructor(private authService:AuthService, private router:Router, private formBuilder:FormBuilder){}

  validarUsuario(){
    //let valueUser = this.formLogin.value
    this.login.user = this.formLogin.value.user
    this.login.clave = this.formLogin.value.clave
    this.authService.obtenerEmpleado(this.login).subscribe({
      next:(valueObtained:any) => {
          if(valueObtained!=Login){
            console.log(this.login);
            this.addToSession(valueObtained);
            this.router.navigate(["app-mant-empleado"])
          }
      }, 
      error:(error) => {
        console.log(error)
      }
    })
  }

  addToSession(empleado:Login){
    sessionStorage.setItem("empleado",JSON.stringify(empleado))
  }
}
