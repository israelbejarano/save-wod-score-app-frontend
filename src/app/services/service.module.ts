import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AtletasService, MensajesService, RecordsService, WodsService } from './api.services';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AtletasService,
    MensajesService,
    RecordsService,
    WodsService
  ]
})
export class ServiceModule { }
