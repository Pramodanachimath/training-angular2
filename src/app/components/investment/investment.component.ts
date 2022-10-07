import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Investment } from 'src/app/models/investment';
import { InvestmentService } from 'src/app/service/investment.service';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
investments:Investment[]=[]
planType:string=''

  constructor(private _investmentService:InvestmentService,
              private _router:Router,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe(map=>{
      let propertyName=map.get("property");
      let propertyValue=map.get("value");
      let pval=''
      if(propertyValue)
      pval=propertyValue;
      if(propertyName=='purpose'){
        this._investmentService.getByPurpose(pval).subscribe({
          next:(data)=>{
            console.log(`${data}`);
            this.investments=data;
          }
        });
      }
      if(propertyValue)
      pval=propertyValue;
      if(propertyName=='risk'){
        this._investmentService.getByRisk(pval).subscribe({
          next:(data)=>{
            console.log(`${data}`);
            this.investments=data;
          }
        });
    }
  })
  
// get the type that the user clicked
    this._activatedRoute.paramMap.subscribe(map=>{
      let type=map.get("type");
      if(type)
       this.planType=type;

       this._investmentService.getPlansByType(this.planType).subscribe({
        next:(data)=>{
          console.log(`${data}`);
          this.investments=data;
        },
         complete:()=>console.log(`completed`)
      });
    });


    this._investmentService.getInvestments().subscribe({
      next:(data)=>{
        console.log(`${data}`);
        this.investments=data;
      },
      complete:()=>console.log(`Completed`)
    })
  }
  show=(investmentId:number)=>{
    console.log(`Id is ${investmentId}`);

    //call navigate method to move to another route
    //the url is like   /investment-details/1 in the browser
    //the root path is like   /investment-details/:id in the browser
    this._router.navigate(["/investment-details",investmentId])
  }

}



