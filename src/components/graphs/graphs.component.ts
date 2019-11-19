import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})

export class GraphsComponent implements OnInit {
  public primaryXAxis: Object;
  public primaryYAxis: Object;
  public chartData: Object[];
  public title: Object;
  public legendSettings: Object;
  public marker: Object;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Temperature Chart'
    this.legendSettings = {
      visible: true
  }
    this.marker = {
    dataLabel: {
        visible: true
    }
};
    this.chartData = [
        { month: 'Jan', sales: 35 }, { month: 'Feb', sales: 28 },
        { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
        { month: 'May', sales: 40 }, { month: 'Jun', sales: 32 },
        { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
        { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
        { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
    ];
    this.primaryXAxis = {
        valueType: 'Category'
    };
    this.primaryYAxis = {
        labelFormat: '{value}°C'
    };
  }

}
