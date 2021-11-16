import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {};
  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        //, 'Authorization':localStorage.get('AccessToken')
      })
    }
  }

  /*getAllProducts(): Observable<ProductAPI[]> {
    // return this.httpClient.get<Product[]>(environment.APIURL + '/getproducts');
    return this.httpClient.get<ProductAPI[]>(environment.APIURL + '/products');

  }

  getProductByID(pID: number): Observable<ProductAPI> {
    return this.httpClient.get<ProductAPI>(environment.APIURL + '/products/' + pID);
  }

  getProductByCatID(cID: number): Observable<ProductAPI[]> {
    return this.httpClient.get<ProductAPI[]>(environment.APIURL + '/products?CategoryID=' + cID);
  }*/
/*
  (newPrd: ProductAPI): Observable<any> {
    //this.httpClient.post(environment.APIURL + '/products',newPrd);
    return this.httpClient.post(`${environment.APIURL}/products`, JSON.stringify(newPrd), this.httpOptions);

  }
*/
}









