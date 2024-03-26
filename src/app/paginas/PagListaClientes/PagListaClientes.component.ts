import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../utilitarios/modelos/detalleCliente';
import { ClienteService } from '../../servicios/Cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-PagListaClientes',
  templateUrl: './PagListaClientes.component.html',
  styleUrls: ['./PagListaClientes.component.css']
})
export class PagListaClientesComponent implements OnInit {
  listaClientes:Array<Cliente> = [];
  filtro: string = "";
  rows:number = 10;
  page:number = 1;
  pages:number = 0;
  mostrarPassword = true;

  constructor(
    private clienteService: ClienteService,
  ) { }

  ngOnInit() {
    this.consultarCliente();
  }

  consultarCliente(){
    this.clienteService.getClientes(this.filtro, this.rows, this.page).subscribe(respuesta => {
      if (respuesta.codigo == "1"){
        this.listaClientes = respuesta.data;
        this.pages = respuesta.pages;
        this.paginacion(respuesta.pages);
      }
    })
  }

  mostrarPass(){
    this.mostrarPassword = !this.mostrarPassword;
  }

  cambiarPagina(pagina:number){
    this.page = pagina;
    this.consultarCliente();
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
      this.consultarCliente();
    }
  }

  btnAnterior(){
    if(this.page > 1){
      this.page--;
      this.consultarCliente();
    }
  }

  btnPrimera(){
    if(this.page > 1){
      this.page = 1;
      this.consultarCliente();
    }
  }

  btnUltima(){
    if(this.page < this.pages){
      this.page = this.pages;
      this.consultarCliente();
    }
  }

  eliminar (codigo:number){
    Swal.fire({
      title: "¿Estás segur@ de eliminar este registro?",
      showCancelButton: true,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
      icon: "question"
    }).then ((res) =>{
      if(res.isConfirmed){
        this.clienteService.eliminarCliente(codigo).subscribe(data => {
          if (data.codigo == "1"){
            this.consultarCliente();
            Swal.fire({
              title: "Mensaje",
              text: "Cliente eliminado con éxito",
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
