import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagListaAutos',
  templateUrl: './PagListaAutos.component.html',
  styleUrls: ['./PagListaAutos.component.css']
})
export class PagListaAutosComponent implements OnInit {
  mostrarImagen = false;
  filtro: string = "";

  listaVehiculos:Array<any> = [];

  constructor(
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
    this.listaVehiculos = this.vehiculoService.getVehiculos();
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  reception(dato: number){
    console.log('Dato:', dato);
  }
}
