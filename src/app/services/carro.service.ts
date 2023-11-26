import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { carroCreateDto, carroUpdateDto } from '../models/carro.types';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  private urlApi="http://localhost:8080"

  constructor(private http : HttpClient ){}

  public getAll():Observable<any>{
    return this.http.get<any>(`${this.urlApi}/carros`) 
  }

  public createCarro(data:carroCreateDto):Observable<carroCreateDto>{
    console.log(data);
    return this.http.post<carroCreateDto>(`${this.urlApi}/carros`,data)
  }

  // public updateCarro(data:carroUpdateDto):Observable<carroUpdateDto>{
  //   return this.http.put<carroUpdateDto>(`${this.urlApi}/carros`,data)
  // }

  public deleteCarro(id:number):Observable<any>{
    console.log(id);
    return this.http.delete<any>(`${this.urlApi}/carros/${id}`)
  }

}
