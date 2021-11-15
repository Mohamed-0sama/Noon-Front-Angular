import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductAndCategoriesServiceService {

  constructor(private httpClient : HttpClient) {

   }


   getallCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>('http://localhost:3000/categories')
   }

  getallProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>('http://localhost:3000/products')
   }
  
  //  getProductsByID(catName:string):Product[]{
  //    return this.prdList.filter(item=>item.CategoryName === catName);
  //  }

   getProductByID(catName:string):Observable<Product[]>{
     return this.httpClient.get<Product[]>( `http://localhost:3000/products?CategoryName=${catName}`)
    
   }

  //  getOneProductByID(catName:string):Observable<Product>{
    getOneProductByID(pid:number): Observable <Product>{

      return this.httpClient.get<Product>(`http://localhost:3000/products?id=${pid}`)

  }

   insertProduct(newPrd:Product):Observable<Product>{
    //  return this.httpClient.post<Product>(`http://localhost:3000/products`,newPrd)
     return this.httpClient.post<Product>(`http://localhost:5000/api/products`,newPrd)
   }

   uploadimage(file:any){
     const formdata=new FormData();
     formdata.append("image",file);
    // return this.httpClient.post('http://localhost:4000/file',formdata);
        return this.httpClient.post('http://localhost:5000/api/Upload',formdata);
   }

   uploadImages(files:any){
    const formdata=new FormData();
    for(let index =0; index<files.length;index++)
    { 
      const element= files[index];
      formdata.append('files',element);
    }
   return this.httpClient.post('http://localhost:4000/multifiles',formdata);
   }
}
