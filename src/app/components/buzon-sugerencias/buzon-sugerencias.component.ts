import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MensajesService, AtletasService } from '../../services/api.services';
import { Sugerencia } from '../../models/classes/api.classes';
import { IAtleta, ISugerencia } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-buzon-sugerencias',
  templateUrl: './buzon-sugerencias.component.html',
  styleUrls: ['./buzon-sugerencias.component.scss'],
})
export class BuzonSugerenciasComponent implements OnInit, OnDestroy {

  atleta: IAtleta;
  mms: string;

  sugerenciaCreadaSubscription: Subscription;

  constructor(private mensajesService: MensajesService,
              private atletasService: AtletasService) { }


  ngOnDestroy(): void {
    if (this.sugerenciaCreadaSubscription) {
      this.sugerenciaCreadaSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.sugerenciaCreadaSubscription = this.atletasService.createSugerenciaEvent.subscribe((sugerencias: ISugerencia[]) => {
      console.log('sugerencias subscription: ', sugerencias);
      const toastMms = 'sugerencia enviada con éxito';
      this.mensajesService.showBottomToast(toastMms, 2000);
      setTimeout(() => {
        this.mms = '';
      }, 200);
    });
  }

  enviar() {
    const sugerencia: Sugerencia = new Sugerencia();
    sugerencia.atleta = this.atleta;
    sugerencia.mms = this.mms;
    // console.log('sugerencia: ', sugerencia);
    this.atletasService.crearSugerencia(sugerencia);
  }

}
