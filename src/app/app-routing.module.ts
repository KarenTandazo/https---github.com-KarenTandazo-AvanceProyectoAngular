import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaAutosComponent } from './paginas/PagListaAutos/PagListaAutos.component';
import { PagNoEncontradaComponent } from './paginas/PagNoEncontrada/PagNoEncontrada.component';
import { PagEditarAutoComponent } from './paginas/PagEditarAuto/PagEditarAuto.component';
import { PagVehiculoRegistroComponent } from './paginas/PagVehiculoRegistro/PagVehiculoRegistro.component';
import { PagDetalleAutoComponent } from './paginas/PagDetalleAuto/PagDetalleAuto.component';
import { PagClienteRegistroComponent } from './paginas/PagClienteRegistro/PagClienteRegistro.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "vehiculos",
    component: PagListaAutosComponent
  },
  {
    path: "nuevovehiculo",
    component: PagVehiculoRegistroComponent
  },
  {
    path: "vehiculo/:codigo",
    component: PagDetalleAutoComponent
  },
  {
    path: "vehiculo/edit/:codigo",
    component: PagEditarAutoComponent
  },
  {
    path: "nuevocliente",
    component: PagClienteRegistroComponent
  },
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    component: PagNoEncontradaComponent,
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
