import { Component, OnInit } from '@angular/core';
import {ImageData} from '../../models/ImageData';
import {RestClientService} from '../../app/rest-client.service';
@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  public url: string;
  photoUrls: string[] = [];
  constructor(private restClientService: RestClientService) {}

  ngOnInit() {
    this.getImages();
  }
  getImages() {
    this.restClientService.getImageData().subscribe(
      res => {
        this.photoUrls = this.photoUrls.concat((res as any).photos.map(p => p.src.landscape));
      },
      err => {
        console.log('Error occurred' + err.message);
      }
    );
  }
}
