import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-communication-component',
  standalone: false,
  templateUrl: './communication-component.component.html',
  styleUrl: './communication-component.component.scss'
})
export class CommunicationComponentComponent {
  @Input() childdata = { index:-1, title: '', description: '' };

  @Output() passIndex = new EventEmitter<number>();

  onSave() {
    console.log('SAVE clicked:', this.childdata);
    this.passIndex.emit(this.childdata.index);
  }
}
