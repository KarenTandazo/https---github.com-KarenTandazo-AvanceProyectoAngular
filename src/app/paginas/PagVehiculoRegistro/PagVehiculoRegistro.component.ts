import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/detalleAuto';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) { 
    this.formulario = this.formBuilder.group({
      "codigo": [],
      "imagen": [],
      "marca": [],
      "modelo": [],
      "year": [],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "score": [],
    });
  }

  ngOnInit() {
  }

  guardar(){
    let vehiculo:Vehiculo = {...this.formulario.value};
    this.vehiculoServicio.addVehiculo(vehiculo);
    console.log("formulario", this.formulario.value);
  }

}
