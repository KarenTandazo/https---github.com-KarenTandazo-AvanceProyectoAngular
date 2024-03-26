import { Component, OnInit } from '@angular/core';
import { VehiculoService } from '../../servicios/Vehiculo.service';
import { Vehiculo } from '../../utilitarios/modelos/detalleAuto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaAutos',
  templateUrl: './PagListaAutos.component.html',
  styleUrls: ['./PagListaAutos.component.css']
})
export class PagListaAutosComponent implements OnInit {
  mostrarImagen = false;
  listaVehiculos:Array<Vehiculo> = [];
  filtro: string = "";
  rows:number = 10;
  page:number = 1;
  pages:number = 0;

  constructor(
    private vehiculoService: VehiculoService,
  ) { }

  ngOnInit(){
    this.consultarVehiculo();
  }

  mostrar(){
    this.mostrarImagen = !this.mostrarImagen
  }

  reception(dato: number){
    console.log('Dato:', dato);
  }

  consultarVehiculo(){
    this.vehiculoService.getVehiculosTodos(this.filtro, this.rows, this.page).subscribe(respuesta => {
      if (respuesta.codigo == "1"){
        this.listaVehiculos = respuesta.data;
        this.pages = respuesta.pages;
        this.paginacion(respuesta.pages);
      }
    })
  }

  cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarVehiculo();
  }

  listaPaginas:Array<number> = [];

  paginacion(pages:number){
    this.listaPaginas = [];
    for(let i=1; i<=pages; i++){
      this.listaPaginas.push(i);
    }
  }

  btnSiguiente(){
    if(this.page < this.pages){
      this.page++;
      this.consultarVehiculo();
    }
  }

  btnAnterior(){
    if(this.page > 1){
      this.page--;
      this.consultarVehiculo();
    }
  }

  btnPrimera(){
    if(this.page > 1){
      this.page = 1;
      this.consultarVehiculo();
    }
  }

  btnUltima(){
    if(this.page < this.pages){
      this.page = this.pages;
      this.consultarVehiculo();
    }
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
          }else{
            Swal.fire({
              title: "Error",
              text: "No se pudo eliminar el registro: "+data.mensaje,
              icon: "error"
            });
          }
        });
      }
    });
  }
}
