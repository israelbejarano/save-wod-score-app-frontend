import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { AtletasService, MensajesService } from '../../services/api.services';
import { IAtleta } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-card-atleta',
  templateUrl: './card-atleta.component.html',
  styleUrls: ['./card-atleta.component.scss'],
})
export class CardAtletaComponent implements OnInit, OnDestroy {

  atleta: IAtleta;
  updateAtletaSubscription: Subscription;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService,
              private mensajesService: MensajesService) { }


  ngOnDestroy(): void {
    if (this.updateAtletaSubscription) {
      this.updateAtletaSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    // console.log(this.atleta);
    this.updateAtletaSubscription = this.atletasService.updateAtletaEvent.subscribe((atletaUpdated: IAtleta) => {
      // console.log('subscribe del update: ', atletaUpdated);
      this.atleta = atletaUpdated;
      const mms = 'Perfil actualizado con éxito.';
      this.mensajesService.showBottomToast(mms, 2000);
    });
  }


  async editarPerfil() {
    const modal = await this.modalController.create({
      component: EditarPerfilComponent,
      componentProps: {
        atleta: this.atleta
      }
    });
    return await modal.present();
  }

}
