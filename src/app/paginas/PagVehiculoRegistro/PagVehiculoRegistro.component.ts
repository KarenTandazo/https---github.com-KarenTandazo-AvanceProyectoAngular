import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/detalleAuto';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
      "codigo": ["", [Validators.required, validadorCodigo()]],
      "codigo_confirm": [],
      "imagen": [],
      "marca": ["", [Validators.required]],
      "modelo": ["", [Validators.minLength(10)]],
      "year": [],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "score": [],
    },
    {
      validators: compararCodigo(),
    }
    );
  }

  ngOnInit() {
    this.formulario.controls["imagen"].disable();
  }

  guardar(){
    let vehiculo:Vehiculo = {...this.formulario.value};
    this.vehiculoServicio.addVehiculo(vehiculo);
    console.log("formulario", this.formulario.value);
    if (this.formulario.valid){
      alert("Guardado con éxito");
    }else{
      alert("Formulario incompleto: Por favor revisa los valores requeridos/obligatorios");
    }
  }
}

export function validadorCodigo(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /^\d{4}$/;
    let value = control.value;
    if (codigoV.test(value)){
      return null;
    }
    return {"codigoValidate": true};
  }
}

export function compararCodigo(){
  return (formulario: FormGroup): ValidationErrors | null => {
    let valor = formulario.controls['codigo'].value;
    let valor2 = formulario.controls['codigo_confirm'].value;
    if (valor === valor2){
      return null;
    }
    return {"codigoComparativo": true};
  }
}
