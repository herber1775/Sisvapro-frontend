import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carroDto } from '../models/carro.types';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  api_url = "http://localhost:8080/carros"
  
  //urlApiPost ="http://localhost:8080/carro/insertar";
  
  //urlApiDelete = "http://localhost:8080/carro/eliminar/";

  //urlApiPut = "http://localhost:8080/carro/actualizar";

  constructor(private http: HttpClient) { 

  }

  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }

  public agregarCarro(formCarro: any): Observable<any>{
    return this.http.post(this.api_url,formCarro);
  }

  public actualizarCarro(carroEditando: any): Observable<any> {
    return this.http.put(this.api_url, carroEditando);
  }

  public eliminarCarro(id: number) {
    console.log(id);
    return this.http.delete(this.api_url+id);
  }

  obtenerCarroPorId(id:number){
    return this.http.get<carroDto>(this.api_url+"/"+id)
  }


}
