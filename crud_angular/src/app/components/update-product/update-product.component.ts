import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {

  id:number=this.activatedRoute.snapshot.params["id"];
  constructor(private activatedRoute:ActivatedRoute,
    private service:ProductService,
    private fb:FormBuilder,
    private router:Router
  ){}
  updateProductForm!: FormGroup;
  ngOnInit(){
    this.getProductById();
    this.updateProductForm = this.fb.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
      description: [null, [Validators.required]],
      price: [null, [Validators.required]],
      quantity: [null, [Validators.required]]
    });
  }

  getProductById(){
    this.service.getProductById(this.id).subscribe((res)=>{
      console.log(res);
      this.updateProductForm.patchValue(res);
    })
  }

  updateProduct(){
    this.service.updateProduct(this.id,this.updateProductForm.value).subscribe((res)=>{
      console.log(res);
      if(res!=null){
        this.router.navigateByUrl("products")
      }
    })
  }
}
