import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorCalificacion(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /^[1-5]\d*$/;
    let value = control.value;
    if (codigoV.test(value)){
      return null;
    }
    return {"calificacionValidate": true};
  }
}