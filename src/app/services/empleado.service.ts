import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor() { }

  usuario: string[]=[];
  clave: string[]=[];

  addUsuario(usuario:string){
    this.usuario.push(usuario);
  }

  addClave(clave:string){
    this.clave.push(clave);
  }


}
