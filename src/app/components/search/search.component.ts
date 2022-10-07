import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
propertyName:string=''
choice:string=''
  constructor(private _router:Router) { }

  ngOnInit(): void {
  }

  show=(propertyName:string,choice:string)=>{
     this._router.navigate(["/investments",propertyName,choice])
  }

}
