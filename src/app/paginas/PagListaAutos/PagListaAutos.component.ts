import { Component, Input, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Vehiculo } from '../../utilitarios/modelos/detalleAuto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaAutos',
  templateUrl: './PagListaAutos.component.html',
  styleUrls: ['./PagListaAutos.component.css']
})
export class PagListaAutosComponent implements OnInit {
  mostrarImagen = false;
  _filtro: string = "";
  //buscar = "";

  //@Input() valor:string = "";
  listaVehiculos:Array<Vehiculo> = [];

  constructor(
    private vehiculoService: VehiculoService,
  ) { }

  ngOnInit(){
    //this.buscador();
    this.consultarVehiculo();
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  reception(dato: number){
    console.log('Dato:', dato);
  }

  /*buscador(){
    this.vehiculoService.getVehiculosBuscador(this.filtro).subscribe(data => {
      this.listaVehiculos = data;
    });
  };*/

  get filtro():string{
    return this._filtro;
  }

  set filtro( filtro:string){
    this._filtro = filtro;
  }

  consultarVehiculo(){
    this.vehiculoService.getVehiculosBuscador().subscribe(respuesta => {
      this.listaVehiculos = respuesta;
    })
  }

  eliminar (codigo:string){
    Swal.fire({
      title: "¿Estás segur@ de eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      icon: "question"
    }).then ((res) =>{
      if(res.isConfirmed){
        this.vehiculoService.eliminarVechiculo(codigo).subscribe(data => {
          if (data.codigo == "1"){
            this.consultarVehiculo();
            Swal.fire({
              title: "Mensaje",
              text: "Vehículo eliminado con éxito",
              icon: "success"
            });
          }
        });
      }
    });
  }
}
