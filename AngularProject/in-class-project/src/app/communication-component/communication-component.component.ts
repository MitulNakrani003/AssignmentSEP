import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-communication-component',
  standalone: false,
  templateUrl: './communication-component.component.html',
  styleUrl: './communication-component.component.scss'
})
export class CommunicationComponentComponent {
  @Input() childdata: { title: string, description: string }  = { title: '', description: '' };

  onSave() {
    console.log('SAVE clicked:', this.childdata);
  }
}
