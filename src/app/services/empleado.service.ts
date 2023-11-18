import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservedValueOf } from 'rxjs';
import { EmpleadoCreateDto,EmpleadoDto,EmpleadoUpdateDto,EmpleadoDeleteDto } from '../models/empleado.types';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private urlApi="http://localhost:8080"

  constructor(private http : HttpClient) { 

  }

  public getAll():Observable<any>{
    return this.http.get<EmpleadoDto>(`${this.urlApi}/empleados`)
  }

  public createEmpleado(dto:EmpleadoCreateDto):Observable<EmpleadoCreateDto>{
    return this.http.post<EmpleadoCreateDto>(`${this.urlApi}/empleados`,dto)
  }

  public deleteEmpleado(id:EmpleadoDeleteDto):Observable<EmpleadoDeleteDto>{
    return this.http.delete<EmpleadoDeleteDto>(`${this.urlApi}/empleados/${id}`)
  }

  public updateEmpleado(dto:EmpleadoUpdateDto):Observable<EmpleadoUpdateDto>{
    return this.http.put<EmpleadoUpdateDto>(`${this.urlApi}/empleados`,dto)
  }

}
