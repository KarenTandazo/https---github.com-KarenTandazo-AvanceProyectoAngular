import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,} from '@angular/core';

@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit, OnChanges {

    @Input() calificacion:any = 0;

    @Output() accion = new EventEmitter<any>();
    
    listaScore:Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.generar();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["calificacion"].currentValue){
      this.generar();
    }
  }

  generar (){
    this.listaScore = [];
    for(let i=0; i<this.calificacion; i++){
      this.listaScore.push(1);
    }
  }

  select(){
    this.accion.emit(this.calificacion);
  }

}
