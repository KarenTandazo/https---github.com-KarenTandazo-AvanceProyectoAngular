import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../utilitarios/modelos/detalleCliente';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../../servicios/Cliente.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagEditarCliente',
  templateUrl: './PagEditarCliente.component.html',
  styleUrls: ['./PagEditarCliente.component.css']
})
export class PagEditarClienteComponent implements OnInit {
  cliente?: Cliente;
  formulario: FormGroup;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      "id": [],
      "nombre": ["", [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      "apellido": ["", [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      "password": ["", [Validators.required]],
      "telefono": ["", [Validators.pattern(/^([0-9])*$/)]],
      "email": ["", [Validators.email]],
    });
   }

  ngOnInit() {
    this.ActivatedRoute.params.subscribe(params => {
      this.clienteService.getClienteSolo(params["codigo"]).subscribe(data => {
        if (data.codigo == "1"){
          this.cliente = data.data;
          this.formulario.controls["id"].setValue(this.cliente?.id);
          this.formulario.controls["nombre"].setValue(this.cliente?.nombre);
          this.formulario.controls["apellido"].setValue(this.cliente?.apellido);
          this.formulario.controls["password"].setValue(this.cliente?.password);
          this.formulario.controls["telefono"].setValue(this.cliente?.telefono);
          this.formulario.controls["email"].setValue(this.cliente?.email);
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

  guardarCliente(){
    if(this.formulario.valid){
      this.clienteService.actualizarCliente({...this.formulario.value}, this.formulario.controls["id"].value).subscribe(data => {
        if(data.codigo == "1"){
          Swal.fire({
            title: "Mensaje",
            text: "Vehículo actualizado con éxito",
            icon: "info"
          });
        }else{
          Swal.fire({
            title: "Error",
            text: "No se pudo actualizar: "+data.mensaje,
            icon: "error"
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
