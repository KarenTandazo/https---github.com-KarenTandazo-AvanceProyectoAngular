import { Component, EventEmitter, Input, OnInit, Output, input, output } from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit {

    @Input() calificacion:any = 0;

    @Output() accion = new EventEmitter<any>();
    
    listaScore:Array<any> = [];

  constructor() { }

  ngOnInit() {
    for(let i=0; i<this.calificacion; i++){
      this.listaScore.push(1);
    }
  }

  select(){
    this.accion.emit(this.calificacion);
  }

}
