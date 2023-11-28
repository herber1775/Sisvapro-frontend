import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { carroCreateDto, carroDto, carroUpdateDto } from '../models/carro.types';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  api_url = "http://localhost:8080"
  urlmarca = "http://localhost:8080/marcas"
  
  //urlApiPost ="http://localhost:8080/carro/insertar";
  
  //urlApiDelete = "http://localhost:8080/carro/eliminar/";

  //urlApiPut = "http://localhost:8080/carro/actualizar";

  constructor(private http: HttpClient) { 

  }

  public getAll():Observable<any>{
    return this.http.get<carroDto>(`${this.api_url}/carros`) 
  }

  public createCarro(data:carroCreateDto):Observable<carroCreateDto>{
    return this.http.post<carroCreateDto>(`${this.api_url}/carros`,data)
  }

  public deleteCarro(id:number):Observable<any>{
    console.log(id);
    return this.http.delete<any>(`${this.api_url}/carros/${id}`)
  }

  public updateCarro(data:carroUpdateDto):Observable<carroUpdateDto>{
    return this.http.put<carroUpdateDto>(`${this.api_url}/carros`,data)
  }

  filtrarPorMarca(): Observable<any[]>{
    return this.http.get<any[]>(this.urlmarca + '/list');
  }

  buscarCarro(buscarCarro: string): Observable<any> {
    return this.http.get(this.api_url+"/carros/marca/"+buscarCarro);
  }

  /*public getData(): Observable<any>{
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
  }*/

  obtenerCarroPorId(id:number){
    return this.http.get<carroDto>(this.api_url+"/carros/"+id)
  }


}
