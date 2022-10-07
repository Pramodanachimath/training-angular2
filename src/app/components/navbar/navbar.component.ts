import { Component, OnInit } from '@angular/core';
import { InvestmentService } from 'src/app/service/investment.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
planTypes:string[]=[]
  constructor(private _investmentService:InvestmentService) { }

  ngOnInit(): void {
    this._investmentService.getAllTypes().subscribe({
      next:(data)=>{
        this.planTypes=data;
      }
    })
  }

}
