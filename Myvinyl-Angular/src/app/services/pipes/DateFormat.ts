import { PipeTransform, Pipe } from "@angular/core";

@Pipe({ name: 'DateFormat'})
export class DateFormat implements PipeTransform  {
  constructor() {}
  transform(value: number | string) {
    let date = new Date(value);console.log(JSON.stringify(date))
    date = (JSON.stringify(date) == 'null') ? new Date(946708560000) : date ;
    let day:number | string = date.getDate();
    let month: number | string = date.getMonth() + 1;
    let year: number | string =  date.getFullYear();

    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    return `${month}/${day}/${year}`;
  }
}