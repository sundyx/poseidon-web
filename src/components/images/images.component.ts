import {Component, OnInit} from '@angular/core';
import {ImageData} from '../../models/imageData';
import {RestClientService} from '../../app/rest-client.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  public photoUrlsList = [];
  public displayList = [];
  public photo: string;
  appTitle: string = 'myapp';
  public isLoading: boolean;

  constructor(private restClientService: RestClientService) {
  }

  ngOnInit() {
  }

  getImages() {
    this.isLoading = true;
    this.restClientService.getImageData().subscribe(
      data => {

        const body = 'body';
        const rows = 'rows';
        const timeStamp = 'time_stamp';
        const url = 'url';
        //console.log("data");
        //console.log(data);
        for (const i in data[body]) {
          const dataTable = {};
          const imageData = new ImageData();
          imageData.url = (data[body][i][url]);
          console.log('url');
          //console.log(data[body][i][url]);
          console.log(imageData.url);
          this.photoUrlsList.push(imageData.url);
        }
        this.displayList = this.photoUrlsList;
        console.log(this.displayList);
        //this.photoUrls = this.photoUrls.concat((data as any).photos.map(p => p.src.landscape));
        //console.log("photos");
        //console.log(this.photoUrlsList);
        this.isLoading = false;
      },
      err => {
        console.log('Error occurred' + err.message);
        this.isLoading = false;
      }
    );
  }
}
