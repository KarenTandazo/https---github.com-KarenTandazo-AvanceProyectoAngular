import { NgModule } from "@angular/core";
import { PagListaAutosComponent } from "./PagListaAutos/PagListaAutos.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/utilitariosModule";
import { PagDetalleAutoComponent } from "./PagDetalleAuto/PagDetalleAuto.component";
import { RouterModule } from "@angular/router";

@NgModule({
    imports:[
        CommonModule,
        FormsModule,
        UtilitariosModule,
        RouterModule
    ],
    declarations:[
        PagListaAutosComponent,
        PagDetalleAutoComponent
    ],
    exports:[
        PagListaAutosComponent,
        PagDetalleAutoComponent
    ]
})
export class PaginaModule{

}