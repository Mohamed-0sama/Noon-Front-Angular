import { Component, OnInit } from '@angular/core';
import { UsersFromApiService } from 'src/app/services/users-from-api.service';
import { UserAPI } from 'src/app/ViewModels/user-api';
import { UserStats } from 'src/app/ViewModels/user-stats';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {

  
  ImagesUrl: string = environment.ImagesURL;
  todayDate: Date = new Date();
  UserList: UserAPI[] = [];
  SelectedUser!: UserAPI;
  UserStats!: UserStats;

  constructor(private userSerAPI: UsersFromApiService) {
  }
  ngOnInit(): void {
    this.userSerAPI.getAllUsers()
    .subscribe(usersList => {
      this.UserList = usersList;
      //console.log(this.UserList)
    },
      err => {
        console.log(err);
      });
  }
  showUserStats(){
    this.userSerAPI.getUserStats()
    .subscribe(userstats => {
      this.UserStats = userstats;
      console.log(this.UserStats)
    },
      err => {
        console.log(err);
      });
  }
/*
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
*/
}
