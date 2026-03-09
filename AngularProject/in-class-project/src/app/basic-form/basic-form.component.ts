import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  standalone: false,
  templateUrl: './basic-form.component.html',
  styleUrl: './basic-form.component.scss'
})
export class BasicFormComponent {
  userName: string = '';
  email: string = '';
  dob = '';
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
    this.userName = '';
    this.email = '';
    this.dob = '';
    this.saved = false;
  }
}
