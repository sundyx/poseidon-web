import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {GraphsComponent} from './graphs/graphs.component';
import {HomeComponent} from './home/home.component';
import {ChartModule} from '@syncfusion/ej2-angular-charts';
import {MaterialModule} from './material.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CategoryService, LegendService, TooltipService} from '@syncfusion/ej2-angular-charts';
import {DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GraphsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule, AppRoutingModule, ChartModule, BrowserAnimationsModule,
    MaterialModule, FormsModule, MatProgressSpinnerModule, FlexLayoutModule, HttpClientModule
  ],
  providers: [CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

