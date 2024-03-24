import { NgModule } from "@angular/core";
import { PagListaAutosComponent } from "./PagListaAutos/PagListaAutos.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilitariosModule } from "../utilitarios/utilitariosModule";
import { PagEditarAutoComponent } from "./PagEditarAuto/PagEditarAuto.component";
import { RouterModule } from "@angular/router";
import { PagVehiculoRegistroComponent } from "./PagVehiculoRegistro/PagVehiculoRegistro.component";
import { PagDetalleAutoComponent } from "./PagDetalleAuto/PagDetalleAuto.component";
import { PagClienteRegistroComponent } from "./PagClienteRegistro/PagClienteRegistro.component";

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
        PagVehiculoRegistroComponent,
        PagEditarAutoComponent,
        PagClienteRegistroComponent
    ],
    exports:[
        PagListaAutosComponent,
        PagDetalleAutoComponent,
        PagVehiculoRegistroComponent,
        PagEditarAutoComponent,
        PagClienteRegistroComponent
    ]
})
export class PaginaModule{

}