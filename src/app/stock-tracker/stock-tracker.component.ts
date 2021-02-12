import { StockDataServiceService } from './../stock-data-service.service';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-stock-tracker',
  templateUrl: './stock-tracker.component.html',
  styleUrls: ['./stock-tracker.component.scss']
})
export class StockTrackerComponent {

  checked: boolean = false; // Bind with the checkbox
  subscription: Subscription; // subscription of type Subscription, which we unsubscribe when checked is false
  isFetching: boolean = false; // showing 'fetching...' till 15 seconds, until we have data
  currentTime: any; // Sets the current time when checked is true

  // data for graph component to show the result
  stockData: any = [
    {
      data: []
    }
  ];
  dataPoint:any = [];

  constructor(private sds: StockDataServiceService) { }

  getStockData() {
    this.currentTime = this.getCurrentTime();
    this.subscription = this.sds.getStockData().subscribe(val => {
      this.isFetching = false;
      console.log('Value----', val);
      this.stockData[0].data.push(val['id']);
        this.dataPoint.push(val['id']); // auto update the value on each change
      
    });
  }

  getCurrentTime() {
    let time = moment().format("HH:mm");
    return time;
  }

  stopTracking() {
    console.log('STopped'); // Log stopped when cecked is false and data should no more conitinue and we unsubscribe
    this.subscription.unsubscribe();
  }

  getData() {
    if (this.checked) {
      this.isFetching = true;
      this.getStockData(); // get the Data
    } else {
      this.isFetching = false; // unsubscribe
      this.stopTracking();
    }
  }

  addStocks(){
// Addmore Stocks similar to ICICI. Skiping this part as API isnt
  }
}
