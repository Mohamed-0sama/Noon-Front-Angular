import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;
  passwordLogin: string;
  loginBoolean!: boolean;
  //private userService: UserAuthService
  constructor() {
    this.userName = '';
    this.passwordLogin = '';
    this.loginBoolean = false//this.userService.isLogged();
  }

  ngOnInit(): void {

  }

  login() {
    //this.userService.login(this.emailLogin, this.passwordLogin);
    this.loginBoolean = true;
    console.log("in login user " + this.loginBoolean);
    //console.log("in login user " + this.loginBoolean);
  }
  logout() {
    //this.userService.logout();
    this.loginBoolean = false;
    console.log("in logout user " + this.loginBoolean);
  }


}
