import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../utilitarios/modelos/detalleCliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";

  httpOptions = {
    headers: new HttpHeaders ({"Content-Type": "application/json"})
  };

  getClientes(filtro?:string, rows?:number, page?:number): Observable<Respuesta>{
    let body = new HttpParams();
    body = filtro? body.set("filtro", filtro) : body;
    body = rows? body.set("rows", rows) : body;
    body = page? body.set("page", page) : body;
    return this.http.get<Respuesta>(this.baseUrl+"clientes/", {params: body});
  }

  insertCliente(cliente: Cliente){
    return this.http.post<Respuesta>(this.baseUrl+"cliente/", cliente, this.httpOptions)
  }

  getClienteSolo(codigo:number){
    return this.http.get<Respuesta>(this.baseUrl+"cliente/"+codigo);
  }

  actualizarCliente(cliente: Cliente, codigo:number){
    return this.http.put<Respuesta>(this.baseUrl+"cliente/"+codigo, cliente, this.httpOptions)
  }

  eliminarCliente(codigo:number){
    return this.http.delete<Respuesta>(this.baseUrl+"cliente/"+codigo);
  }

}

export interface Respuesta{
  codigo: string;
  mensaje: string;
  data:Array<Cliente>|Cliente|any;
  rows: number;
  pages: number;
  records: number;
  page: number;
}
