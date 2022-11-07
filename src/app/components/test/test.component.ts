import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  classApplied = false;
  haveFamilyData = true;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    //give all input validation
    //with family history is dynamic array
    secondCtrlAllergy: ['', Validators.required],
    secondCtrlVaccination: ['', Validators.required],
    secondCtrlHealthBackground: ['', Validators.required],

  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrlGeneralInformation: ['', Validators.required],
    fourthCtrlSign: ['', Validators.required],
    fourthCtrlSymtomp: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrlInitial: ['', Validators.required],
    fifthCtrlDifferential: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    sixthCtrl: ['', Validators.required],
  });
  seventhFormGroup = this._formBuilder.group({
    seventhCtrlPrimary: ['', Validators.required],//alt+shift+arrowdown
    seventhCtrlTreatment: ['', Validators.required],
  });
  isLinear = false;

  currentUserName = localStorage.getItem('username')

  details: string[] = [];
  onEditingDetailContent = "";
  editingId = -1;
  editingStatus = false;
  addingStatus = true;
  displayedColumns: string[] = ['details'];
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  //form 1
  autoGrow() {//not yet
    if (document.getElementById("detail2") !== null) {

      (document.getElementById("detail2") as HTMLInputElement).style.height = document.getElementById("detail2")?.scrollHeight + "px";

    }
  }
  appendDetails(newDetail: string) {
    if (newDetail) {
      this.details.push(newDetail);
    }
  }
  editStage(id: any, content: string) {
    this.editingStatus = true;

    this.onEditingDetailContent = content;
    this.autoGrow();
    this.editingId = Number(id.value.slice(6, -17)) - 1;


  }
  completeEdit(content: string) {
    this.details.splice(this.editingId, 1, content);
    this.editingStatus = false;
  }
  clearStage(c: any) {
    //array.splice(index, howMany, [element1][, ..., elementN]);
    this.details.splice(Number(c.value.slice(6, -17)) - 1, 1)

  }
  //form 2
  openForm() {
    this.haveFamilyData = false;

  }
}
