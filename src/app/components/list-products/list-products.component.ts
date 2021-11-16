import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsFromAPIService } from 'src/app/services/products-from-api.service';
import { ProductAPI } from 'src/app/ViewModels/product-api';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  ImagesUrl: string = environment.ImagesURL;
  todayDate: Date = new Date();
  ProductList: ProductAPI[] = [];
  SelectedProduct!: ProductAPI;
  selectedCat:string="";
  StaticCat: string[] = ["Mobiles","Tablets","Electronics","Watches","Televisions","Fashion","Clothes"];



  constructor(private prdSerAPI: ProductsFromAPIService) {

  }

  ngOnInit(): void {
    this.prdSerAPI.getAllProducts()
    .subscribe(productList => {
      this.ProductList = productList;
      //console.log(this.ProductList)
    },
      err => {
        console.log(err);
      });
  }

  showProducts(category:string) {
    if(category === "") {
    this.prdSerAPI.getAllProducts()
      .subscribe(productList => {
        this.ProductList = productList;
        //console.log(this.ProductList)
      },
        err => {
          console.log(err);
        });
      }
      else {
        this.prdSerAPI.getProductByCatName(category)
        .subscribe(productList => {
          this.ProductList = productList;
          //console.log(this.ProductList)
        },
          err => {
            console.log(err);
          });
      }
        
  }

  showProductById(id:string){
    this.prdSerAPI.getProductByID(id)
    .subscribe(product => {
      this.SelectedProduct = product;
      console.log(this.SelectedProduct)
    },
      err => {
        console.log(err);
      });
  }
 
}
