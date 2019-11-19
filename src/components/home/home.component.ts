import {Component, OnInit} from '@angular/core';
import {RestClientService} from '../../app/rest-client.service';
import {SensorData} from '../../models/sensorData';
import {ExportToCsv} from 'export-to-csv';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public primaryXAxis: object;
  public primaryYAxis: object;
  public title: string;
  public legendSettings: object;
  public marker: object;
  public crosshair: object;
  public tooltip: object;
  public isLoading: boolean;
  public dataList = [];

  constructor(private restClientService: RestClientService) {
  }

  ngOnInit(): void {
  }

  getGraph() {
    this.title = 'Air & Water Temperature';
    this.legendSettings = {
      visible: true
    };
    // this.chartData = dataList;
    this.primaryXAxis = {
      valueType: 'DateTime',
      intervalType: 'Auto'
    };
    this.primaryYAxis = {
      labelFormat: '{value}°C'
    };
    this.tooltip = {enable: true, shared: true, format: '${series.name} : ${point.x} : ${point.y}'};
    this.crosshair = {enable: true, lineType: 'Vertical'};
    this.marker = {visible: true};
  }

  doGet() {
    this.restClientService.getSensorData().subscribe(
      data => {
        const body = 'body';
        const rows = 'rows';
        const timeStamp = 'time_stamp';
        const waterTemperature = 'water_temperature';
        const airTemperature = 'air_temperature';
        const conductivity = 'conductivity';
        const dissolvedOxygen = 'dissolved_oxygen';
        const oxidation = 'oxidation';
        const ammonium = 'ammonium';
        const deviceID = 'device_id';
        const pH = 'ph';

        for (const i in data[body][rows]) {
          const dataTable = {};
          // console.log(data[body][rows][i][timeStamp]);
          const s_data = new SensorData();
          s_data.timeStamp = data[body][rows][i][timeStamp];
          s_data.waterTemp = data[body][rows][i][waterTemperature];
          s_data.airTemp = data[body][rows][i][airTemperature];
          s_data.conductivity = data[body][rows][i][conductivity];
          s_data.dissolvedOxygen = data[body][rows][i][dissolvedOxygen];
          s_data.oxidation = data[body][rows][i][oxidation];
          s_data.ammonium = data[body][rows][i][ammonium];
          s_data.deviceID = data[body][rows][i][deviceID];
          s_data.pH = data[body][rows][i][pH];

          const fullDate = new Date(s_data.timeStamp);
          const time = fullDate.toString().split(' ');
          console.log(time);
          let dateString = time.slice(0, 4);
          let dateStringNew = dateString.join(' ');
          const timeString = time[4];
          console.log(timeString);
          const date = fullDate.getDate();
          console.log(date);
          console.log(fullDate.getTime());
          dataTable['timeStamp'] = fullDate;
          dataTable['date'] = dateStringNew;
          dataTable['time'] = timeString;
          dataTable['waterTemp'] = s_data.waterTemp;
          dataTable['airTemp'] = s_data.airTemp;
          dataTable[conductivity] = s_data.conductivity;
          dataTable[pH] = s_data.pH;
          dataTable[oxidation] = s_data.oxidation;
          dataTable[deviceID] = s_data.deviceID;
          dataTable[ammonium] = s_data.ammonium;
          dataTable[dissolvedOxygen] = s_data.dissolvedOxygen;
          this.dataList.push(dataTable);
          // console.log(dataTable);
        }
        console.log('dataList');
        console.log(this.dataList);
        this.getGraph();
        // return data;
      },
      err => {
        console.log('Error occurred' + err.message);
      }
    );
  }

  splitValue(value, index) {
    return value.substring(0, index) + ',' + value.substring(index);
  }

  exportCSV() {
    console.log(this.dataList);
    const options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'Graph CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
    };
    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.dataList);
  }

  progressLoading() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }


}
