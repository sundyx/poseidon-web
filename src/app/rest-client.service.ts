import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestClientService {
  constructor(private httpClient: HttpClient) {
  }

  getSensorData() {
    return this.httpClient.get(`https://3ceq2wedp7.execute-api.ap-southeast-1.amazonaws.com/test/pastSensorData?deviceId=Test_Device_1`);
  }

  getImageData() {
    return this.httpClient.get('https://f9egsd93kc.execute-api.ap-southeast-1.amazonaws.com/Test/getimages?deviceId=Test_Device_1');
  }
}


