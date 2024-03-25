import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  listaPassword:Array<any> = [];

  transform(value: any): any {
    if (!value) return value;
    return '*'.repeat(value.toString().length);
  }

}
