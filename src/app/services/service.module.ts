import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AtletasService, MensajesService, RecordsService, WodsService, UsuariosService } from './api.services';

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
    WodsService,
    UsuariosService
  ]
})
export class ServiceModule { }
