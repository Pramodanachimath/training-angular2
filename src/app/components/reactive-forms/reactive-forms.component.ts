import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  empForm=new FormGroup({
    empname:new FormControl("",[Validators.required,Validators.minLength(3)]),
    department:new FormControl(),
    salary:new FormControl(),
    email:new FormControl(),
    address:new FormGroup({
      city:new FormControl('Bangalore'),
      state:new FormControl(),
    })
  })
  onShow=()=>{
    console.log(this.empForm);
    console.log(this.empForm.valid);
  }

}
