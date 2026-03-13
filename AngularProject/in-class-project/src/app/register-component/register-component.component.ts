import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-component',
  standalone: false,
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.scss'
})
export class RegisterComponentComponent {
  constructor() {
    console.log(this.registerForm)
    this.onSelectionChange();
  }

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
    contacttype: new FormControl('Email', [Validators.required]),
    phonenumber: new FormControl('')
  }, [this.customPasswordCheck])

  get name() {
    return this.registerForm.get('name');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get confirmpassword() {
    return this.registerForm.get('confirmpassword')
  }

  get contacttype() {
    return this.registerForm.get('contacttype')
  }

  get phonenumber(){
    return this.registerForm.get('phonenumber')
  }

  customPasswordCheck(control: AbstractControl): ValidationErrors | null {
    let password = control.get('password')
    let confirmpassword = control.get('confirmpassword');
    if (password?.value != confirmpassword?.value) {
      return { customPasswordMismatch: 'The Passwords are Mismathched.' }
    }
    return null;
  }

  onSelectionChange(): void {
    let contactTypeValue = this.contacttype?.value;
    let phoneControl = this.registerForm.get('phonenumber');

    if (contactTypeValue === 'Email') {
      phoneControl?.clearValidators();
    } else {
      phoneControl?.setValidators([
        Validators.required
      ]);
    }
    phoneControl?.updateValueAndValidity();
  }

  saveValues() {
    console.log('Form values:', this.registerForm.getRawValue());
    this.registerForm.reset({
      contacttype: 'Email'
    });
    this.onSelectionChange();
  }

}
