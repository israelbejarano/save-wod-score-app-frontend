import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AtletaUpdateData } from '../../models/classes/atleta.update.data';
import { Atleta } from '../../models/interfaces/atleta';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.scss'],
})
export class EditarPerfilComponent implements OnInit {

  @Input() atleta: Atleta;


  atletaUpdateData: AtletaUpdateData = new AtletaUpdateData();
  fNacAtletaUpdateData: string;

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    this.atletaUpdateData = this.atleta;
    this.fNacAtletaUpdateData = this.atletaUpdateData.fNacimiento.toISOString();
  }

  guardar() {
    this.atletaUpdateData.fNacimiento = new Date(this.fNacAtletaUpdateData);
    console.log('modelo a guardar:', this.atletaUpdateData);
  }

  salir() {
    this.modalController.dismiss();
  }

}