import {Component, OnInit} from '@angular/core';
import {RestClientService} from '../rest-client.service';
import {SensorData} from '../../models/sensorData';
import {timestamp} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public primaryXAxis: object;
  public primaryYAxis: object;
  public chartData: SensorData[];
  public title: string;
  public legendSettings: Object;
  public marker: Object;

  constructor(private restClientService: RestClientService) {
  }

  ngOnInit(): void {
  }

  getGraph(dataList) {
    this.title = 'Air & Water Temperature';
    this.legendSettings = {
      visible: true
    };
    this.marker = {
      dataLabel: {
        visible: true
      }
    };
    this.chartData = dataList;
    this.primaryXAxis = {
      valueType: 'Category'
    };
    this.primaryYAxis = {
      labelFormat: '{value}°C'
    };
  }

  doGet() {
    const dataList = [];
    this.restClientService.getSensorData().subscribe(
      data => {
        const body = 'body';
        const rows = 'rows';
        const timeStamp = 'time_stamp';
        const waterTemperature = 'water_temperature';
        const airTemperature = 'air_temperature';
        console.log(data[body][rows]);
        for(const i in data[body][rows]) {
          const dataTable = {};
          console.log(data[body][rows][i][timeStamp]);
          const s_data = new SensorData();
          s_data.timeStamp = data[body][rows][i][timeStamp];
          s_data.waterTemp = data[body][rows][i][waterTemperature];
          s_data.airTemp = data[body][rows][i][airTemperature];
          const fullDate = new Date(s_data.timeStamp);
          console.log(fullDate);
          let date = fullDate.getDate();
          let time = fullDate;
          dataTable['timeStamp'] = s_data.timeStamp;
          dataTable['date'] = date;
          dataTable['time'] = time;
          dataTable['waterTemp'] = s_data.waterTemp;
          dataTable['airTemp'] = s_data.airTemp;
          dataList.push(dataTable);
          console.log(dataTable);
        }
        this.getGraph(dataList);
      },
      err => {
        console.log('Error occurred' + err.message);
      }
    );
  }


}
