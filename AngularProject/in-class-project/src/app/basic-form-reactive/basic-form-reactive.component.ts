import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-basic-form-reactive',
  standalone: false,
  templateUrl: './basic-form-reactive.component.html',
  styleUrl: './basic-form-reactive.component.scss'
})
export class BasicFormReactiveComponent {
  userName = new FormControl();
  email = new FormControl();
  dob = new FormControl();
  clickCount = 0;
  saved = false;

  saveFields(){
    this.clickCount+=1;
    console.log(this.userName);
    console.log(this.email);
    console.log(this.dob);
    this.saved = true
  }

  clearFields() {
    this.userName.reset();
    this.email.reset();
    this.dob.reset();
    this.saved = false;
  }
}
