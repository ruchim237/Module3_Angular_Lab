import { Injectable } from '@angular/core';
import {Product} from './product';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PserviceService {
  static user:Product[];
  baseURL:string="./assets/products.json";
  constructor(private http: HttpClient) {
    this.http.get<Product[]>(this.baseURL).subscribe(data=>{
      PserviceService.user=data; 
    },err=>{
      console.log(err.stack);
    }
    );
  }
  getAll(){
    return PserviceService.user;
  } 
  addProduct(product:Product){
    PserviceService.user.push(product);
  }
}
