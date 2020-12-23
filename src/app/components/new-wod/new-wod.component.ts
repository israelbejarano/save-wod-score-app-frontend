import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { WodsService, AtletasService } from '../../services/api.services';
import { Wod } from '../../models/classes/api.classes';
import { IAtleta } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-new-wod',
  templateUrl: './new-wod.component.html',
  styleUrls: ['./new-wod.component.scss'],
})
export class NewWodComponent implements OnInit {

  private atleta: IAtleta;

  modeloWod: Wod = new Wod();
  fRealizacion: string;

  puedeGuardarWod = false;

  constructor(private modalController: ModalController,
              private wodsService: WodsService,
              private atletasService: AtletasService,
              private router: Router) { }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
  }

  guardar() {
    this.modeloWod.atleta = this.atleta;
    this.modeloWod.fRealizacion = new Date(this.fRealizacion);
    console.log('modeloWod: ', this.modeloWod);
    this.wodsService.createWod(this.modeloWod);
    this.router.navigate(['main', 'listado-wods']);
    this.salir();
  }

  guardarWod(varAValidar) {
    // console.log('var a validar:', varAValidar);
    if (varAValidar) {
      this.puedeGuardarWod = true;
    } else {
      this.puedeGuardarWod = false;
    }
  }

  salir() {
    this.modalController.dismiss();
  }

}
