import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  api_url = "http://localhost:8080/clientes" 

  constructor(private http: HttpClient) { }
  
  public getData(): Observable<any>{
    return this.http.get<any>(this.api_url);
  }
}
