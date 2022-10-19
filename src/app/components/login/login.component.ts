import { JwtHelperService } from '@auth0/angular-jwt';

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from 'src/app/_services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  // public loginForm: FormGroup;
  loginForm = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  helper = new JwtHelperService();


  constructor(private _router: Router, private authService: AuthService) {

  }

  ngOnInit(): void {

  }

  navigateToHome() {
    this._router.navigateByUrl('/test')
  }
  checkLogin() {
    const user = JSON.stringify({ 'username': this.loginForm.value.username, 'password': this.loginForm.value.password })
    this.authService.login(user).subscribe((res) => {
      console.log(res.token);
      if (res.code == 200) {
        const decodedToken = this.helper.decodeToken(res.token);
        localStorage.setItem('token', decodedToken);
        localStorage.setItem('username', decodedToken.username);
        console.log(decodedToken.username)
        this.navigateToHome();
      }

    })




  }


}
