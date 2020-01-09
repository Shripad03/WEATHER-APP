import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterilModule } from './shared/modules/app-materil.module';
import { ChartsModule } from 'ng2-charts';
import { WeatherComponent } from './component/weather/weather.component';
import { LayoutComponent } from './shared/component/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterilModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
