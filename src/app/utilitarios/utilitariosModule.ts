import { NgModule } from "@angular/core";
import { AEspacioPipe } from "./Pipes/AEspacio.pipe";
import { CalificacionComponent } from "./componentes/calificacion/calificacion.component";
import { CommonModule } from "@angular/common";
import { PasswordPipe } from "./Pipes/password.pipe";

@NgModule({
    declarations:[
        AEspacioPipe,
        CalificacionComponent,
        PasswordPipe
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AEspacioPipe,
        CalificacionComponent,
        PasswordPipe
    ]
})

export class UtilitariosModule{

}