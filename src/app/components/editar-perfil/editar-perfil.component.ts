import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtletasService } from '../../services/atletas.service';
import { IAtleta } from '../../models/interfaces/api.interfaces';
import { Atleta } from '../../models/classes/api.classes';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit {

  @Input() atleta: IAtleta;


  atletaUpdateData: Atleta = new Atleta();
  fNacAtletaUpdateData: string;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService) {
  }

  ngOnInit() {
    this.atletaUpdateData = this.atleta;
    this.fNacAtletaUpdateData = this.atletaUpdateData.fNacimiento.toISOString();
  }

  guardar() {
    this.atletaUpdateData.fNacimiento = new Date(this.fNacAtletaUpdateData);
    console.log('modelo a guardar:', this.atletaUpdateData);
    this.atletasService.updateAtleta(this.atletaUpdateData);
    this.salir();
  }

  salir() {
    this.modalController.dismiss();
  }

}
