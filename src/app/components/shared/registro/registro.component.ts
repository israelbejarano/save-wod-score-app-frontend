import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  email: string;
  nombre: string;
  passwordA: string;
  passwordB: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  crear() {}

  salir() {
    this.modalController.dismiss();
  }

}
