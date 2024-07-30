import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL = "http://localhost:9000";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  createProduct(product: any): Observable<any> {
    return this.http.post(BASIC_URL+'/api/create', product);
  }

  private apiUrl = "http://localhost:9000/api";

  postProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, product);
  }

  getAllProducts():Observable<any>{
    return this.http.get(`${this.apiUrl}/products`)
  }

  getProductById(id:number):Observable<any>{
    return this.http.get(`${this.apiUrl}/products`+id)
  }
  updateProduct(id:number,product:any):Observable<any>{
    return this.http.put(`${this.apiUrl}/products`+id,product)
  }
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/products`+id)
  }
}
