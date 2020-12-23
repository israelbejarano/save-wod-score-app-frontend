import { Component, OnInit } from '@angular/core';
import { AtletasService } from '../services/api.services';
import { IAtleta } from '../models/interfaces/api.interfaces';
import { PopoverController } from '@ionic/angular';
import { OpcionesComponent } from '../components/shared/opciones/opciones.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  atleta: IAtleta;

  constructor(private atletasService: AtletasService,
              public popoverCtrl: PopoverController) {}

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
  }

  async abrirOpciones(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: OpcionesComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
