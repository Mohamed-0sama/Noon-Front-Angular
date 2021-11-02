import { RouterModule, Routes } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserAccountHeaderComponent } from './user-account/user-account-header/user-account-header.component';
import { UserAccountFooterComponent } from './user-account/user-account-footer/user-account-footer.component';
import { UserAccountAsideComponent } from './user-account/user-account-aside/user-account-aside.component';
import { UserAccountMainComponent } from './user-account/user-account-main/user-account-main.component';
import { OrderComponent } from './user-account/main-section/order/order.component';
import { AddressComponent } from './user-account/main-section/address/address.component';
import { PaymentsComponent } from './user-account/main-section/payments/payments.component';
import { NoonCreditsComponent } from './user-account/main-section/noon-credits/noon-credits.component';
import { ReturnsComponent } from './user-account/main-section/returns/returns.component';
import { ClaimsComponent } from './user-account/main-section/claims/claims.component';
import { PreferencesComponent } from './user-account/main-section/preferences/preferences.component';
import { GiftCardsComponent } from './user-account/main-section/gift-cards/gift-cards.component';
import { ProfileComponent } from './user-account/main-section/profile/profile.component';

const routes : Routes =[
  {path: 'Account', component: UserAccountComponent,
children:[
  {path: 'Orders', component: OrderComponent},
  {path: 'Addresses', component: AddressComponent},
  {path: 'Payments', component: PaymentsComponent},
  {path: 'noonCredits', component: NoonCreditsComponent},
  {path: 'Returns', component: ReturnsComponent},
  {path: 'Claims', component: ClaimsComponent},
  {path: 'Preferences', component: PreferencesComponent},
  {path: 'giftCards', component: GiftCardsComponent},
  {path: 'Profile', component: ProfileComponent},
]},
  {path: '', redirectTo: '/User/Account', pathMatch: 'full'},
]

@NgModule({
  declarations: [
    UserAccountComponent,
    UserAccountHeaderComponent,
    UserAccountFooterComponent,
    UserAccountAsideComponent,
    UserAccountMainComponent,
    PaymentsComponent,
    NoonCreditsComponent,
    ReturnsComponent,
    ClaimsComponent,
    PreferencesComponent,
    GiftCardsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
