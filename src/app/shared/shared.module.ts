import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ChartComponent } from './chart/chart.component';
// For MDB Angular Free
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'


@NgModule({
  declarations: [
    LoaderComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
    WavesModule
  ],
  exports: [
    LoaderComponent,
    ChartComponent
  ]
})
export class SharedModule { }
