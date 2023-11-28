import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  api_url="http://localhost:8080/empleados"

  constructor(private http : HttpClient) { }

  usuario: string[]=[];
  clave: string[]=[];

  addUsuario(usuario:string){
    this.usuario.push(usuario);
  }

  addClave(clave:string){
    this.clave.push(clave);
  }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

}
