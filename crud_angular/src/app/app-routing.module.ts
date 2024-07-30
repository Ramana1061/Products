import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { GetAllProductsComponent } from './components/get-all-products/get-all-products.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';

const routes: Routes = [
  {path:'create',component:CreateProductComponent},
  {path:'products',component:GetAllProductsComponent},
  {path:'products/:id',component:UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
