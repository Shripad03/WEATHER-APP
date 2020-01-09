import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private breakpointObserver: BreakpointObserver, public snackBar: MatSnackBar) {}
    
  ngOnInit() {
 
  }
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  
    animateEle1:boolean = false;
    animateEle2:boolean  = false;
    fromDone:boolean = false;
    chatShow:boolean = false;
    backTo:boolean = false;
  

}
