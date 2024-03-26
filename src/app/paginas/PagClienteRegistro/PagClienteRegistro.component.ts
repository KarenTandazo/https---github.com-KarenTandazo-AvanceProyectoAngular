import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../servicios/Cliente.service';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagClienteRegistro',
  templateUrl: './PagClienteRegistro.component.html',
  styleUrls: ['./PagClienteRegistro.component.css']
})
export class PagClienteRegistroComponent implements OnInit {
  mostrarCampos = false;

  formulario: FormGroup;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
  ) { 
    this.formulario = this.formBuilder.group({
      "nombre": ["", [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      "apellido": ["", [Validators.required, Validators.pattern(/^[A-Za-z\s\xF1\xD1]+$/)]],
      "password": ["", [Validators.required]],
      "telefono": ["", [Validators.pattern(/^([0-9])*$/)]],
      "email": ["", [Validators.email]],
    })
  }

  ngOnInit() {
  }

  mostrar(){
    this.mostrarCampos = !this.mostrarCampos
    console.log(this.mostrarCampos);
  }

  guardar(){
    if (this.formulario.valid){
      this.clienteService.insertCliente({...this.formulario.value}).subscribe(
        respuesta => {
          if (respuesta.codigo == "1"){
            Swal.fire({
              title: "Mensaje",
              text: "Cliente registrado con éxito",
              icon: "success"
            }).then(res => {
              this.formulario.reset();
            });
          }else{
            Swal.fire({
              title: "Error",
              text: "No se pudo registrar el cliente: "+respuesta.mensaje,
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
