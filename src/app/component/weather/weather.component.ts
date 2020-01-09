import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  //-------- Animation  properties ----------
  obj:any = {}
  animateEle1:boolean = false;
  animateEle2:boolean  = false;
  animateEle3:boolean = false;
  fromDone:boolean = false;
  chartShow:boolean = false;
  backTo:boolean = false;
//-------- Chart  properties ----------
  country:any;
  weatherType:any;
  msz:string;
  yearLable:any;
  WeatherData:any;
  YearsLabel:any=[];
  chartMonth:any= [];
  abcChart:any[] = [{
    data:[],
    label:"chart name"
  }];
  requestUrl:any = "http://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/";

  constructor( public snackBar: MatSnackBar, public webSer:WeatherService) {}

  ngOnInit() {
    this.getYearList();
  }
  

  reqyestApi:any = { url:""}
   
  getYearList() {
   this.reqyestApi.url = "http://s3.eu-west-2.amazonaws.com/interview-question-data/metoffice/Rainfall-England.json"; 
    this.webSer.getData(this.reqyestApi).subscribe(res => {
      this.WeatherData = res;
      if(typeof(this.WeatherData) != "undefined"){
          let len =  this.WeatherData.length;
          for(var i = 0; i< len; i++){
            // Push unique year only 
            if(this.YearsLabel.indexOf(this.WeatherData[i].year) == -1){
              this.YearsLabel.push(this.WeatherData[i].year);
            } 
          }
      }
    })
  }



 aniObj:any = {animateEle1:false, animateEle2:false, animateEle3:false, chartShow:false, backTo:false, fromDone:false}
  submitFrom(objFrom){
            if(typeof(this.obj.weatherType) == "undefined"){
              this.msz = "please slect wether type";
              this.aniObj.animateEle1 = true;
              this.openSnackBar(this.msz);
              return false;
            }else  if(typeof(this.obj.country) == "undefined"){ 
              this.aniObj.animateEle2 = true;
              this.msz = "please slect country";
              this.openSnackBar(this.msz)
              return false;

            }else  if(typeof(this.obj.year) == "undefined"){
              this.aniObj.animateEle3 = true;
              this.msz = "please slect Year";
              this.openSnackBar(this.msz)
              return false;
            } else {
              this.aniObj.animateEle1 = false;
              this.aniObj.animateEle2 = false;
              this.aniObj.animateEle3 = false;
              this.aniObj.fromDone = true;
              this.aniObj.backTo = false;
              this.chartData(objFrom);
              console.log("Good to go" ,this.abcChart[0].data)
            }
}


chartData(objFrom){
  this.reqyestApi.url = this.requestUrl+objFrom.weatherType+"-"+objFrom.country+".json";
  this.webSer.getData(this.reqyestApi).subscribe(res => { 
    this.WeatherData = res;
    if(typeof(this.WeatherData) != "undefined"){
        let len =  this.WeatherData.length;
        for(var i = 0; i< len; i++){
          // get selected year value  only 
          if(this.WeatherData[i].year == objFrom.year && this.abcChart[0].data.indexOf(this.WeatherData[i].value) == -1){
              this.abcChart[0].data.push(Math.round(this.WeatherData[i].value));
              this.chartMonth.push(this.WeatherData[i].month);
              
          }
        }
        this.aniObj.chartShow = true;
    }
   
  });
}



backToFun(){
  this.abcChart[0].data = [];
  this.chartMonth = [];
  this.aniObj.chartShow = false;
  this.aniObj.fromDone = false;
  this.aniObj.backTo = true;
}


openSnackBar(msg:any) {
  console.log(msg);
  this.snackBar.open(msg,"", {
    duration: 1500, verticalPosition: 'bottom', panelClass: 'snack-error'
  });
}



// ------------------ Chart  --------------------
public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
// ----------------------------------------------


}
