import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    public loginModel: LoginModel = new LoginModel();
    constructor(private _router: Router) {}
    public login(): void{
      console.log(this.loginModel);
      this._router.navigate(["/"]);
    }
}
