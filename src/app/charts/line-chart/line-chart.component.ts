
import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {
  @Input() data: any; // Input we get from parent for graph presentation

  lineChartData: ChartDataSets[];

  // Define type of chart
  lineChartType = 'line';
  dataPoint: number;
  constructor() { }
}
