import { Injectable } from '@angular/core';
import { Vehiculo } from '../utilitarios/modelos/detalleAuto';
import { Observable, map } from 'rxjs';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://www.epico.gob.ec/vehiculo/public/api/";
  // Todos los vehículos => GET vehiculos/
  // Insert => POST vehiculo/
  // Update => PUT vehiculo/
  // Delet => DELETE vehiculo/:codigo
  // Consulta1 => GET vehiculo/:codigo

  private listaVehiculos: Array<Vehiculo> = [
    {"codigo": "AAA1", "imagen":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_d71cdaceff82463c893d1d117fc2802d.jpg", "marca":"CHEVROLET", "modelo":"ONIX", "year":2022, "color":"AZUL", "precio":50000, "kilometraje":1700, "score":3},
    {"codigo": "AAA2", "imagen":"https://static.patiotuerca.com/ghost/ecuador/2023/02/Jetour-X70-Plus.jpg", "marca":"KIA", "modelo":"RIO", "year":2023, "color":"ROJO", "precio":80000, "kilometraje":2700, "score":4},
    {"codigo": "AAA3", "imagen":"https://i2.wp.com/www.escapesmendoza.cl/blog/wp-content/uploads/2021-05-07-PLATA_JOLION_HAVAL.png?resize=480%2C322", "marca":"CHERY", "modelo":"ARRIZO 5", "year":2023, "color":"GRIS", "precio":90000, "kilometraje":2000, "score":5},
    {"codigo": "AAA4", "imagen":"https://www.eluniverso.com/resizer/FkwWRQnqo9FLu0MGpX-WCESGbTs=/1024x510/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/E5VVGMAMSFBAFPK5V2BMNUMRVM.jpg", "marca":"TOYOTA", "modelo":"AGYA", "year":2020, "color":"BLANCO", "precio":40000, "kilometraje":1000, "score":3},
    {"codigo": "AAA5", "imagen":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_05a99b23df054e0eb2c93b3885eaa13e.jpg", "marca":"HYUNDAI", "modelo":"ACCENT", "year":2021, "color":"NEGRO", "precio":60000, "kilometraje":3500, "score":4},
  ];

  /*getVehiculosBuscador(filtro:any): Observable<Array<Vehiculo>>{
    const escucha: Observable<Array<Vehiculo>> = new Observable (escucha => {
      let lista = this.listaVehiculos.filter(auto => 
        auto.marca.toLowerCase().includes(filtro.toLowerCase()) ||
        auto.modelo.toLowerCase().includes(filtro.toLowerCase()) ||
        auto.codigo.toLowerCase().includes(filtro.toLowerCase())
      )
      escucha.next(lista);
    })
    return escucha;
  };*/

  getVehiculoCodigoRuta(codigo:String): Vehiculo | undefined{
    let vehiculo = this.listaVehiculos.find(elemento => elemento.codigo === codigo);
    return vehiculo;
  };
  
  addVehiculo(vehiculo: Vehiculo){
    this.listaVehiculos.push(vehiculo);
  }
  
  //API
  getVehiculosBuscador(): Observable<Vehiculo[]>{
    return this.http.get<Respuesta>(this.baseUrl+"vehiculos/").pipe(
      map(respuesta => {
        return respuesta.data;
      })
    );
  }

  insertVehiculo(vehiculo: Vehiculo){
    let httpOptions = {
      headers: new HttpHeaders ({"Content-Type": "application/json"})
    };
    return this.http.post<Respuesta>(this.baseUrl+"vehiculo/", vehiculo, httpOptions)
  }
}
export interface Respuesta{
  codigo: string;
  mensaje: string;
  data:Array<Vehiculo>|Vehiculo|any;
}
