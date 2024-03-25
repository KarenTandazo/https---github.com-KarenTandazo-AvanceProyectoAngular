import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function validadorDecimales(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const codigoV = /^[1-9]\d*(\.\d{2})$/;
    let value = control.value;
    if (codigoV.test(value)){
      return null;
    }
    return {"decimalesValidate": true};
  }
}