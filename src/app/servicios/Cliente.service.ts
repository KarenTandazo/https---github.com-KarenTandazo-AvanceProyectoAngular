import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../utilitarios/modelos/detalleCliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders ({"Content-Type": "application/json"})
  };

  insertCliente(cliente: Cliente){
    return this.http.post<Respuesta>(this.baseUrl+"cliente/", cliente, this.httpOptions)
  }

  actualizarCliente(cliente: Cliente, codigo:string){
    return this.http.put<Respuesta>(this.baseUrl+"cliente/"+codigo, cliente, this.httpOptions)
  }

  eliminarCliente(codigo:string){
    return this.http.delete<Respuesta>(this.baseUrl+"cliente/"+codigo);
  }

}

export interface Respuesta{
  codigo: string;
  mensaje: string;
  data:Array<Cliente>|Cliente|any;
}
