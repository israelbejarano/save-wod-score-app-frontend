import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AtletasService, WodsService, MensajesService } from '../../services/api.services';
import { Wod } from '../../models/classes/api.classes';
import { IAtleta, IWod } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-new-wod',
  templateUrl: './new-wod.component.html',
  styleUrls: ['./new-wod.component.scss'],
})
export class NewWodComponent implements OnInit, OnDestroy {

  private atleta: IAtleta;

  modeloWod: Wod = new Wod();
  fRealizacion: string;

  puedeGuardarWod = true;

  createWodSubscription: Subscription;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService,
              private wodsService: WodsService,
              private mensajesService: MensajesService,
              private router: Router) { }


  ngOnDestroy(): void {
    if (this.createWodSubscription) {
      this.createWodSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.createWodSubscription = this.wodsService.createWodEvent.subscribe((wods: IWod[]) => {
      console.log('wods creados: ', wods);
      const toastMms = 'Wod creado con éxito';
      this.mensajesService.showBottomToast(toastMms, 2000);
      setTimeout(() => {
        this.modeloWod = new Wod();
        this.fRealizacion = '';
      }, 200);
    });
  }

  guardar() {
    this.modeloWod.atleta = this.atleta;
    this.modeloWod.fRealizacion = new Date(this.fRealizacion);
    console.log('modeloWod: ', this.modeloWod);
    this.wodsService.createWod(this.modeloWod);
    this.router.navigate(['main', 'listado-records']);
    this.salir();
  }

  guardarWod(varAValidar) {
    // console.log('var a validar:', varAValidar);
    if (varAValidar) {
      this.puedeGuardarWod = true;
    } else {
      // this.puedeGuardarWod = false;
    }
  }

  salir() {
    this.modalController.dismiss();
  }

}
