import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http:HttpClient) { }
  result:any;
   
  getData(requestObj){
    console.log( "HERE ARE URL >>>gggg>>>>>>>",requestObj.urll);
    return this.http.get(requestObj.url)
    .map(res => res)
  } 
 
}
