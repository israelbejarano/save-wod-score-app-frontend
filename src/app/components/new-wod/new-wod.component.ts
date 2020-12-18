import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-wod',
  templateUrl: './new-wod.component.html',
  styleUrls: ['./new-wod.component.scss'],
})
export class NewWodComponent implements OnInit {

  puedeGuardarWod = true;
  fRealizacion: string;
  modeloWod: any; // TODO: crear clase e interfaz Wod

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  guardar() {

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
