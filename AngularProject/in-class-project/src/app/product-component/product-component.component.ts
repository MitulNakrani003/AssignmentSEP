import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from './product-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.scss'
})
export class ProductComponentComponent implements OnInit {

  constructor(private productService: ProductServiceService) { }

  allProducts: any[] = [];
  errorMessage = ''

  productForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(2)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)]),
    category: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.fetchAll();
  }

  fetchAll() {
    this.productService.fetchData().subscribe({
      next: (response: any) => { 
        this.allProducts = response.products
        console.log(this.allProducts)
      },
      error: (error) => {
        this.allProducts = [];
        this.errorMessage = 'FAILED TO FETCH';
        console.log(this.errorMessage);
      },
      complete: () => { 
      }
    });
  }

  addProduct() {
    this.allProducts.push(this.productForm.value);
    this.productForm.reset();
  }

}
