import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  id:any;
  product: Product = new Product();

  productList:Product[]

  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {

    this._httpClient.get<Product[]>('http://localhost:8080/products/products').subscribe(result=>{
      this.productList=result;
      console.log(this.productList);

    }, error=>{
      console.log(error);
    })
  }

}
