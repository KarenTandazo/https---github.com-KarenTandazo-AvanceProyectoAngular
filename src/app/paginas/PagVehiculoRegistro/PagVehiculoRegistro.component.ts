import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { validadorCodigo } from '../../Validaciones/VehiculoValidaciones';
import { validadorCalificacion } from '../../Validaciones/CalificaciónValidacion';
import { validadorDecimales } from '../../Validaciones/DecimalesValidacion';

@Component({
  selector: 'app-PagVehiculoRegistro',
  templateUrl: './PagVehiculoRegistro.component.html',
  styleUrls: ['./PagVehiculoRegistro.component.css']
})
export class PagVehiculoRegistroComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder,
  ) { 
    this.formulario = this.formBuilder.group({
      "codigo": ["", [Validators.required, validadorCodigo()]],
      "marca": ["", [Validators.required]],
      "modelo": ["", [Validators.required]],
      "foto": [],
      "anio": ["", [Validators.required]],
      "kilometraje": ["", [Validators.required]],
      "precio": ["", [Validators.required, validadorDecimales()]],
      "calificacion": ["", [Validators.required, validadorCalificacion()]],
    });
  }

  ngOnInit() {
  }

  guardar(){
    if (this.formulario.valid){
      this.vehiculoService.insertVehiculo({...this.formulario.value}).subscribe(
        respuesta => {
          if (respuesta.codigo == "1"){
            Swal.fire({
              title: "Mensaje",
              text: "Vehículo registrado con éxito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
            });
          }else{
            Swal.fire({
              title: "Error",
              text: "No se pudo registrar el vehículo: "+respuesta.mensaje,
              icon: "error"
            });
          }
        }
      )
    }else{
      Swal.fire({
        title: "Revisa nuevamente",
        text: "Asegúrate de cumplir con el formato permitido y llenar todos los campos obligatorios",
        icon: "error"
      });
    }
  }
}