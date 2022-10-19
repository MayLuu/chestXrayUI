import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Observable, Subscriber } from 'rxjs';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})

export class MainComponent implements OnInit {
  name = new FormControl('', [Validators.required]);
  symptoms = new FormControl('', [Validators.required]);
  sexControl = new FormControl('', [Validators.required]);
  dobPattern = "\d{1,2}/\d{1,2}/\d{4}";
  // dob = new FormControl('', [Validators.required,Validators.pattern(this.dobPattern)]);
  dob = new FormControl('', [Validators.required]);
  advice = new FormControl('', [Validators.required]);
  url: any = "";


  //
  //stepper
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({

  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  button = document.getElementById('choosed');
  checked: boolean = false;


  constructor(private _formBuilder: FormBuilder, private _router: Router) {

  }

  ngOnInit(): void {
  }

  getErrorMessage() {

    console.log(this.name.value)
    return this.name.hasError('required') ? 'You must enter a value' : '';
  }
  getSymptomsErrorMessage() {


    return this.symptoms.hasError('required') ? 'You must enter a value' : '';
  }
  getDOBErrorMessage() {

    return this.dob.hasError('required') ? 'You must enter a value' : '';
  }
  getAdviceErrorMessage() {
    return this.advice.hasError('required') ? 'You must enter a value' : '';
  }
  onFileSelected(e: any) {//a function
    if (e.target.files) {
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    }
  }


  //lay file tu may tinh va chuyen thanh base64
  myImage!: Observable<any>;

  base64code!: any;
  //function khi click choose file
  onChange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;

    const file: File = (target.files as FileList)[0];

    console.log(file);//in ra ten hinh anh da chon

    this.convertToBase64(file);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber)
    })

    observable.subscribe((d) => {
      console.log(d)
      this.myImage = d
      this.base64code = d
    })
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();//đặt biến toàn bộ là chữ thường

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete();
    }

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }
  checkField = () => {
    // if(this.secondFormGroup!==null){

    // }else this.checked==false;
    // if(this.checked===true){
    //   this._router.navigateByUrl('/')
    // }else{
    //   alert("wrong pass or username")
    // }
    this._router.navigateByUrl('/found')
  }


}
