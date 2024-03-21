import { NgModule } from "@angular/core";
import { PagListaAutosComponent } from "./PagListaAutos/PagListaAutos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/utilitariosModule";
import { PagDetalleAutoComponent } from "./PagDetalleAuto/PagDetalleAuto.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations:[
        PagListaAutosComponent,
        PagDetalleAutoComponent,
        PagVehiculoRegistroComponent
    ],
    exports:[
        PagListaAutosComponent,
        PagDetalleAutoComponent,
        PagVehiculoRegistroComponent
    ]
})
export class PaginaModule{

}