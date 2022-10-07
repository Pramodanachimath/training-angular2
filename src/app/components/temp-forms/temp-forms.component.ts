import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-temp-forms',
  templateUrl: './temp-forms.component.html',
  styleUrls: ['./temp-forms.component.scss']
})
export class TempFormsComponent implements OnInit {

  user={
    username:'',gender:'',email:'',course:'',address:{city:'',state:'',zipcode:0}
  }

courses:string[]=['Angular','Node','Java','HTML','Spring','Struts']
  constructor() { }

  ngOnInit(): void {
  }

  onRegister=(registerForm:NgForm)=>{
     console.log(registerForm.value);
     console.log(this.user);
  }

}
