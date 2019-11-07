import { Component, OnInit } from '@angular/core';
import {  DataAPIService } from '../dataAPI.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private dataAPIService: DataAPIService) { }

  doGet() {
    this.dataAPIService.getData().subscribe(
      data => {console.log(data); },
      err => {console.log('Error occurred' + err.message); }
    );
  }
  ngOnInit() {}



}
