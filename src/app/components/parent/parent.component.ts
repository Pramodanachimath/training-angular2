import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit,AfterViewInit,AfterViewChecked {
  parentMsg:string=''
  @ViewChild(ChildComponent) child!:ChildComponent
  @ViewChild('header') headerTag!:ElementRef
num:number=0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    // console.log(this.child.childmessage);
    // console.log(this.child.square);
  }
  ngAfterViewInit(): void {
    console.log(`After View Checked`);
    console.log(this.child.childmessage);
    this.parentMsg=this.child.childmessage;
    console.log(this.child.square);

    this.headerTag.nativeElement.style.color='purple'
  }

 

}
