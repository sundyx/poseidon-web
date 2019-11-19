import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from '../components/nav/nav.component';
import {GraphsComponent} from '../components/graphs/graphs.component';
import {HomeComponent} from '../components/home/home.component';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryService, LegendService, TooltipService} from '@syncfusion/ej2-angular-charts';
import {DateTimeService, DateTimeCategoryService, StripLineService, DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';
import { ImagesComponent } from '../components/images/images.component';
import {MatGridListModule} from '@angular/material/typings/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GraphsComponent,
    HomeComponent,
    ImagesComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, ChartModule, BrowserAnimationsModule,
    MaterialModule, FormsModule, MatProgressSpinnerModule, FlexLayoutModule, HttpClientModule, MatGridListModule
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService,
    DateTimeService, LineSeriesService, DateTimeCategoryService, StripLineService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

