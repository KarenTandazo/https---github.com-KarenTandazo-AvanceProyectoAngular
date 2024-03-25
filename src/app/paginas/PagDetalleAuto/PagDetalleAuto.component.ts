import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/detalleAuto';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';

@Component({
  selector: 'app-PagDetalleAuto',
  templateUrl: './PagDetalleAuto.component.html',
  styleUrls: ['./PagDetalleAuto.component.css']
})
export class PagDetalleAutoComponent implements OnInit {
  vehiculo?: Vehiculo
  listaVehiculos:Array<any> = [];
  
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.vehiculoService.getVehiculo(params["codigo"]).subscribe(data => {
        if (data.codigo == "1"){
          this.vehiculo = data.data;
          this.vehiculo?.foto;
          this.vehiculo?.codigo;
          this.vehiculo?.marca;
          this.vehiculo?.modelo;
          this.vehiculo?.anio;
          this.vehiculo?.precio;
          this.vehiculo?.kilometraje;
          this.vehiculo?.calificacion;
          this.vehiculo?.foto;
        }
      });
    });
  }
}