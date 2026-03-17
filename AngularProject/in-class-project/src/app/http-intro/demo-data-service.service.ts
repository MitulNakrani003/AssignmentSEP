import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoDataServiceService {

  private dataUrl: string = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getSampleData() {
    return this.http.get(this.dataUrl);
  }

}
