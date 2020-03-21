import { Pipe, PipeTransform } from '@angular/core';
import { Examination, ExaminationStatus } from '../model/model';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'humanReadableExaminationList'
})
export class HumanReadableExaminationListPipe implements PipeTransform {
 
  constructor(){
    
  }
  
  
  transform(ex: Array<Examination>, exStatus?: ExaminationStatus): string {
    //const dp = new DatePipe("")
    //let niceDate=function(x) { return dp.transform(x, 'dd. MM. yyyy')};
    var ret = "";
    if (ex != null) {
      ex.forEach(function (e) {
        if (exStatus == null || e.status == exStatus) {
          ret.concat("Examination @")/*.concat(niceDate(e.date))*/.concat(", status=").concat(ExaminationStatus[e.status]).concat("\n");
        }
      });
    }
    if (ret == "") {
      ret = " - ";
    }
    return ret;
  }

}
