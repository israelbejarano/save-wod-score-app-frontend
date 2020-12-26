import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {

  email: string;
  passwordA: string;
  passwordB: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  salir() {
    this.modalController.dismiss();
  }

  enviar() {}

}
