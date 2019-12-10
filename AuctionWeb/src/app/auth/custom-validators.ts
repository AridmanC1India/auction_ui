import { AbstractControl } from '@angular/forms';

export class CustomValidators {

    static passwordMatchValidator(control: AbstractControl) {
        const password = control.get('password'); 
        const confirmPassword = control.get('confirmPassword'); 
        if (password && confirmPassword && confirmPassword.value.length !== 0 && password.value !== confirmPassword.value) {
            control.get('confirmPassword').setErrors({ NoPassswordMatch: true });   
        }
    }
    
}
