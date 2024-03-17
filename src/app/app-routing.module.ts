import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/Home/Home.component';
import { PagListaAutosComponent } from './paginas/PagListaAutos/PagListaAutos.component';
import { PagNoEncontradaComponent } from './paginas/PagNoEncontrada/PagNoEncontrada.component';
import { PagDetalleAutoComponent } from './paginas/PagDetalleAuto/PagDetalleAuto.component';

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
    path: "vehiculo/:codigo",
    component: PagDetalleAutoComponent
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
