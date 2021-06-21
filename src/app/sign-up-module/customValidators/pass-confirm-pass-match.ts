import { Injectable } from '@angular/core';
import { AbstractControl, Validator } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PassConfirmPassMatch implements Validator {
    validate(formGroup: AbstractControl) {
        const { password, confirmPassword } = formGroup.value;
        if (password === confirmPassword) {
            return null;
        } else {
            return { passwordsDontMatch: true };
        }

    }
}
