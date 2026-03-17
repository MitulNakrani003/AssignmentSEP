import { Component } from '@angular/core';
import { DemoDataServiceService } from './demo-data-service.service';

@Component({
  selector: 'app-http-intro',
  standalone: false,
  templateUrl: './http-intro.component.html',
  styleUrl: './http-intro.component.scss'
})
export class HttpIntroComponent {
  constructor(private dataService: DemoDataServiceService){}

  getTodos() {
    this.dataService.getSampleData().subscribe();
  }
}
