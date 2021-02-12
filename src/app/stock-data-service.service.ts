import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subject } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockDataServiceService {

  constructor(private http: HttpClient) { }

  getStockData() {
    return interval(15000).pipe(flatMap(() => { return this.http.get("https://jsonplaceholder.typicode.com/todos/1") }));
  }
}
