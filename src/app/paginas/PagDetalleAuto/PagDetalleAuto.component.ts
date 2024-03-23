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
  vehiculo?: Vehiculo = {
    codigo: "",
    marca: "",
    modelo: "",
  }

  //listaVehiculos:Array<any> = [];
  
  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehiculo = this.vehiculoService.getVehiculoCodigoRuta(params['codigo']);
    })
  }

}
