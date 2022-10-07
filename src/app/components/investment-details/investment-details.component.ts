import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Investment } from 'src/app/models/investment';
import { InvestmentService } from 'src/app/service/investment.service';

@Component({
  selector: 'app-investment-details',
  templateUrl: './investment-details.component.html',
  styleUrls: ['./investment-details.component.scss']
})
export class InvestmentDetailsComponent implements OnInit {
planId:number=0;
investment!:Investment;
  constructor(private _investmentService:InvestmentService,
    private _activatedRoute:ActivatedRoute,) { }



  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((map)=>{
     //pass the key
      let pid=map.get("id");
      if(pid)
      this.planId=parseInt(pid);
    });
    this._investmentService.getById(this.planId).subscribe({
      next:(data)=>{
        this.investment=data;
      }
    })
  }

}
