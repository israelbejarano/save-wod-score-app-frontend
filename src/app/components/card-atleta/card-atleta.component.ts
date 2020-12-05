import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { Atleta } from '../../models/interfaces/atleta';
import { AtletasService } from '../../services/atletas.service';
import { Subscription } from 'rxjs';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-card-atleta',
  templateUrl: './card-atleta.component.html',
  styleUrls: ['./card-atleta.component.scss'],
})
export class CardAtletaComponent implements OnInit, OnDestroy {

  atleta: Atleta;
  updateAtletaSubscription: Subscription;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService,
              private mensajesService: MensajesService) { }


  ngOnDestroy(): void {
    if (this.updateAtletaSubscription) {
      this.atletasService.updateAtletaEvent.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    console.log(this.atleta);
    this.updateAtletaSubscription = this.atletasService.updateAtletaEvent.subscribe((atletaUpdated: Atleta) => {
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
