import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-PagListaAutos',
  templateUrl: './PagListaAutos.component.html',
  styleUrls: ['./PagListaAutos.component.css']
})
export class PagListaAutosComponent implements OnInit {
  mostrarImagen = false;
  filtro: string = "";
  buscar = "";

  @Input() valor:string = "";
  listaVehiculos:Array<any> = [];

  constructor(
    private vehiculoService: VehiculoService,
  ) { }

  ngOnInit(){
    //this.buscador();
    this.vehiculoService.getVehiculosBuscador().subscribe(respuesta => {
      console.log(respuesta);
      this.listaVehiculos = respuesta;
    })
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  reception(dato: number){
    console.log('Dato:', dato);
  }

  /*buscador(){
    this.vehiculoService.getVehiculosBuscador(this.filtro).subscribe(data => {
      this.listaVehiculos = data;
    });
  };*/
}
