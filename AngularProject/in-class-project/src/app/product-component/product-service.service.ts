import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }

  private dataUrl: string = "https://dummyjson.com/products";

  fetchData() {
    return this.http.get(this.dataUrl);
  }

}
