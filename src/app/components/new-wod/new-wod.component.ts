import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IAtleta } from '../../models/interfaces/api.interfaces';
import { Wod } from '../../models/classes/api.classes';
import { AtletasService } from '../../services/atletas.service';

@Component({
  selector: 'app-new-wod',
  templateUrl: './new-wod.component.html',
  styleUrls: ['./new-wod.component.scss'],
})
export class NewWodComponent implements OnInit {

  private atleta: IAtleta;

  modeloWod: Wod = new Wod();
  fRealizacion: string;

  puedeGuardarWod = true;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService) { }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
  }

  guardar() {
    this.modeloWod.atleta = this.atleta;
    console.log('modeloWod: ', this.modeloWod);
    // this.salir();
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
