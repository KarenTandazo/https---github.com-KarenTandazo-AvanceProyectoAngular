import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../../utilitarios/modelos/detalleAuto';
import { ActivatedRoute } from '@angular/router';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagEditarAuto',
  templateUrl: './PagEditarAuto.component.html',
  styleUrls: ['./PagEditarAuto.component.css']
})
export class PagEditarAutoComponent implements OnInit {
  vehiculo?: Vehiculo;
  formulario: FormGroup;
  
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private formBuilder: FormBuilder
  ) { 
    this.formulario = this.formBuilder.group({
      "codigo": ["", [Validators.required]],
      "foto": [],
      "marca": ["", [Validators.required]],
      "modelo": ["", [Validators.required]],
      "anio": [],
      "color": [],
      "kilometraje": [],
      "precio": [],
      "calificacion": ["", [Validators.required]],
    });
    this.formulario.controls["codigo"].disable();
  }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.vehiculoService.getVehiculoCodigoRuta(params["codigo"]).subscribe(data => {
        if (data.codigo == "1"){
          this.vehiculo = data.data;
          this.formulario.controls["codigo"].setValue(this.vehiculo?.codigo);
          this.formulario.controls["marca"].setValue(this.vehiculo?.marca);
          this.formulario.controls["modelo"].setValue(this.vehiculo?.modelo);
          this.formulario.controls["anio"].setValue(this.vehiculo?.anio);
          this.formulario.controls["color"].setValue(this.vehiculo?.color);
          this.formulario.controls["precio"].setValue(this.vehiculo?.precio);
          this.formulario.controls["kilometraje"].setValue(this.vehiculo?.kilometraje);
          this.formulario.controls["calificacion"].setValue(this.vehiculo?.calificacion);
          this.formulario.controls["foto"].setValue(this.vehiculo?.foto);
        }else{
          Swal.fire({
            title: "Error",
            text: "No se pudo cargar la información",
            icon: "error"
          });
        }
      })
    })
  }
  guardar(){
    if(this.formulario.valid){
      this.vehiculoService.actualizarVechiculo({...this.formulario.value}, this.formulario.controls["codigo"].value).subscribe(data => {
        if(data.codigo == "1"){
          Swal.fire({
            title: "Mensaje",
            text: "Vehículo actualizado con éxito",
            icon: "info"
          });
        }
      });
    }else{
      Swal.fire({
        title: "Alerta",
        text: "Faltan campos por llenar",
        icon: "error"
      });
    }
  }

}
