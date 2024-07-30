import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  postProductForm!: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.postProductForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
    });
  }

  createProduct() {
    if (this.postProductForm.valid) {
      const productData = this.postProductForm.value;
      console.log('Sending product data:', productData); // Log the product data
      this.productService.postProduct(productData).subscribe(
        response => {
          console.log('Product created successfully', response);
          this.router.navigateByUrl("");
        },
        error => {
          console.error('Error creating product', error);
        }
      );
    }
  }
}
