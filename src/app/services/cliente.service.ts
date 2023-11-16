import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { clienteCreateDto, clienteDto, clienteUpdateDto } from 'src/app/models/cliente.types';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

private urlApi="http://localhost:8080"

  constructor(private http : HttpClient ){

  }

  public getAll():Observable<any>{
    return this.http.get<any>(`${this.urlApi}/clientes`) 
  }

  public createClient(dto:clienteCreateDto):Observable<clienteCreateDto>{
    return this.http.post<clienteCreateDto>(`${this.urlApi}/insertCliente`,dto)
  }

  public deleteClient(idCli:number):Observable<any>{
    return this.http.delete<any>(`${this.urlApi}/${idCli}`)
  }

  public updateClient(dto:clienteUpdateDto):Observable<clienteUpdateDto>{
    return this.http.put<clienteUpdateDto>(`${this.urlApi}/updateCliente`,dto)
  }

}
