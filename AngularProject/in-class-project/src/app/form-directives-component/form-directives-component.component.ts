import { Component } from '@angular/core';

@Component({
  selector: 'app-form-directives-component',
  standalone: false,
  templateUrl: './form-directives-component.component.html',
  styleUrl: './form-directives-component.component.scss'
})
export class FormDirectivesComponentComponent {
  inputData: string = '';
  inputDataArray: any[] = []; 

  addValue(){
    this.inputDataArray.push(
      {data: this.inputData}
    )
  }

  deleteValue(i: number){
    this.inputDataArray.splice(i, 1);
  }
}
