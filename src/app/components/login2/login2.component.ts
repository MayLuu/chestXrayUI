import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/_services/auth/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  hide = true;
  public loginForm: FormGroup;




  constructor(private fb: FormBuilder, private _router:Router) {

    localStorage.clear();
    // Form element defined below
    this.loginForm = this.fb.group({
      name: '',
      password:''

    }

    );
  }
  Login = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })
  ngOnInit(): void {

  }

  navigateToHome(){
    this._router.navigateByUrl('/')
  }
  checkLogin() {
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;
    // <a routerLink="/home">Home</a>


    console.log(name,password);
    if(name==="may" && password==="1"){
      this.navigateToHome();
    }else{
      alert("wrong pass or username")
    }

  }

}
