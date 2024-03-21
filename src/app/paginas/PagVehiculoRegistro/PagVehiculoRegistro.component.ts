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

  vehiculo: Vehiculo
  formulario: FormGroup

  constructor(
    private vehiculoServicio: VehiculoService,
    private formBuilder: FormBuilder
  ) { 
    this.vehiculo = {
      codigo: "",
      imagen: null,
      marca: "",
      modelo: "",
      year: 0,
      color: "",
      kilometraje: 0,
      precio: 0,
      score: 0,
    };
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
    this.vehiculoServicio.addVehiculo(this.vehiculo);
    this.vehiculo = {...this.formulario.value};
    console.log("grabado con éxito");
    console.log("formulario", this.formulario.value);
  }

}
