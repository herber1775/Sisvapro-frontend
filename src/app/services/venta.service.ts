import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { clienteDto } from '../models/cliente.types';
import { ventaDto } from '../models/venta.types';
import { VentaTransaction } from '../models/venta-transaction';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  api_url = "http://localhost:8080";
  constructor(private httpClient:HttpClient) { }


  obtenerClientePorDni(dni:String){
    return this.httpClient.get<clienteDto>(this.api_url+"/clientes/pordni/"+dni)
  }

  obtenerUltimaVenta(){
    return this.httpClient.get<ventaDto>(this.api_url + "/ventas/ultima")
  }

  realizarVenta(ventaTransaction:VentaTransaction){
    return this.httpClient.post(this.api_url+"/ventas",ventaTransaction);
  }
}
