import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(inputArry:any[], choice:string, property:string):any[] {
    if(!choice)
    return inputArry;
    //create a new array as outputArray
    let outputArray:any[]=[];
    //iterate throw the object
     inputArry.forEach((object:any)=>{
             const val=object[property];
             if(!val)
             outputArray=inputArry;
             if(val==choice){
             //push into a new array
              outputArray.push(object);
             }
             else
              outputArray.push('No Data found / Invalid choice')
           
    })
    return outputArray;
  }

}
