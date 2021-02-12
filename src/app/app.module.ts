import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AppComponent } from './app.component';
import { StockTrackerComponent } from './stock-tracker/stock-tracker.component';

import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
@NgModule({
  declarations: [
    AppComponent,
    StockTrackerComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    MatCheckboxModule,
    MatTableModule,
    ChartsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
