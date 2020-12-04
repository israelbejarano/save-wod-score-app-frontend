import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EditarPerfilComponent } from '../editar-perfil/editar-perfil.component';
import { Atleta } from '../../models/interfaces/atleta';
import { AtletasService } from '../../services/atletas.service';

@Component({
  selector: 'app-card-atleta',
  templateUrl: './card-atleta.component.html',
  styleUrls: ['./card-atleta.component.scss'],
})
export class CardAtletaComponent implements OnInit {

  atleta: Atleta;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService) { }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
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
