import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-component',
  standalone: false,
  templateUrl: './tab-component.component.html',
  styleUrl: './tab-component.component.scss'
})
export class TabComponentComponent {
  @Input() title: string = '';
  active: boolean = false;
}
