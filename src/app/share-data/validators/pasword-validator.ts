import { AbstractControl } from "@angular/forms"

export class PasswordCheck {
  static passwordCheck = (control: AbstractControl): { [key: string]: any } | null => {
    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')
    if (password!.value == confirmPassword!.value || confirmPassword!.pristine) {
      return null
    } else {
      return { 'passwordMissmatch': true }
    }
  }
}
