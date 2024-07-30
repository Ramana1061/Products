import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-get-all-products',
  templateUrl: './get-all-products.component.html',
  styleUrls: ['./get-all-products.component.css']
})
export class GetAllProductsComponent {
  constructor(private productSerive:ProductService){}
  products:any= [];
  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.productSerive.getAllProducts().subscribe((res)=>{
      console.log(res);
      this.products=res;
    })
  }

  deleteProduct(id:number){
    this.productSerive.deleteProduct(id).subscribe((res)=>{
      console.log(res);
      this.getAllProducts();
    })
  }
}
