import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmpleadoDto } from '../models/empleado.types';
import { Observable } from 'rxjs';
import { Login } from '../models/login.types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi = "http://localhost:8080/validar"

  constructor(private http : HttpClient) { }

  obtenerEmpleado(login:Login): Observable<any>{
    //return this.http.post<EmpleadoDto>('${this.urlApi}/validar',{})
    return this.http.post(this.urlApi,login)
  }

  logout(): Observable<any> {
    return this.http.post('https://localhost:8080',{});
  } 
  /* obtenerEmpleado(dto: Login): Observable<any>{
    //return this.http.post<EmpleadoDto>('${this.urlApi}/validar',{})
    return this.http.post<EmpleadoDto>(this.urlApi+"/validar",{})
  }*/ 
}
