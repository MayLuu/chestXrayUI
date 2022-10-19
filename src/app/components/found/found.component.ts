
import { Component, OnInit } from '@angular/core';
import { FormControl,Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-found',
  templateUrl: './found.component.html',
  styleUrls: ['./found.component.scss']
})
export class FoundComponent implements OnInit {
  comment = new FormControl('', [Validators.required]);
  deseaseName = new FormControl('', [Validators.required]);
  validationControl = new FormControl('', [Validators.required]);
  constructor(private _formBuilder: FormBuilder,private _router:Router) { }

  ngOnInit(): void {
  }
  getDoctorCommentErrorMessage(){
    return this.comment.hasError('required') ? 'You must enter a comment' : '';
  }
  getErrorMessage() {
    return this.deseaseName.hasError('required') ? 'You must enter a value' : '';
  }

}
