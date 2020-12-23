import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAtleta, IWod } from '../../models/interfaces/api.interfaces';
import { AtletasService, WodsService, MensajesService } from '../../services/api.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-wods-list',
  templateUrl: './wods-list.component.html',
  styleUrls: ['./wods-list.component.scss'],
})
export class WodsListComponent implements OnInit, OnDestroy {

  atleta: IAtleta;
  wods: IWod[];

  createWodSubscription: Subscription;

  constructor(private atletasService: AtletasService,
              private mensajesService: MensajesService,
              private wodsService: WodsService) { }

  ngOnDestroy(): void {
    if (this.createWodSubscription) {
      this.createWodSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.wods = this.wodsService.getListadoWodOfAtleta(this.atleta);
    this.createWodSubscription = this.wodsService.createWodEvent.subscribe((wods: IWod[]) => {
      console.log('wods creados: ', wods);
      const toastMms = 'Wod creado con éxito';
      this.mensajesService.showBottomToast(toastMms, 2000);
      setTimeout(() => {
        this.wods = this.wodsService.getListadoWodOfAtleta(this.atleta);
      }, 200);
    });
  }

}
