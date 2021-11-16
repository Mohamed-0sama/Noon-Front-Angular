import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  //{path:'', component:HomeComponent}, //Default path
  {path:'', redirectTo:'/Products', pathMatch:'full'}, //Default path
  {path:'Products', component: ListProductsComponent},
  {path:'Login', component: LoginComponent},
  {path:'Product/:pid', component: ProductDetailsComponent},
  {path:'Users', component: ListUsersComponent},
  {path:'User/:uid', component: UserDetailsComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
