import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,AfterContentChecked {
childmessage='Great Day'
// square:number=0;
@Input()square:number=0
  constructor() { }
  ngAfterContentChecked(): void {
    this.square=this.square*2;
  }

  ngOnInit(): void {
   
  }

}
