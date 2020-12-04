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

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {
    this.atletaUpdateData = this.atleta;
  }

  seleccionEstatura(event: CustomEvent) {
    console.log('event: ', event);
    console.log('modelo:', this.atletaUpdateData);
  }

  salir() {
    this.modalController.dismiss();
  }

}
