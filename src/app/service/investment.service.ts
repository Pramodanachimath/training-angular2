import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investment } from '../models/investment';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {

  baseurl="http://localhost:8086/investment-api/investments"

  constructor(private _http:HttpClient) { }

  getInvestments=():Observable<Investment[]>=>{
        return this._http.get<Investment[]>(this.baseurl);
  }
  getById=(newplanId:number)=>{
    let url=this.baseurl.concat("/planId/")+newplanId;
    return this._http.get<Investment>(url);
  }
  // http://localhost:8086/investment-api/investments/type?type=Mutual Fund
  getPlansByType=(planType:string):Observable<Investment[]>=>{
    let url=this.baseurl.concat("/type?type/")+planType;
    return this._http.get<Investment[]>(url);
  }

  getAllTypes=():Observable<string[]>=>{
    let url=this.baseurl.concat("/plantypes/")
    return this._http.get<string[]>(url);
  }

  getByPurpose=(purpose:string):Observable<Investment[]>=>{
    let url=this.baseurl.concat("/purpose/")+purpose
    return this._http.get<Investment[]>(url);
  }

  getByRisk=(risk:string):Observable<Investment[]>=>{
    let url=this.baseurl.concat("/risk/")+risk
    return this._http.get<Investment[]>(url);
  }
}


