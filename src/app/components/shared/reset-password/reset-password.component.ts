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
  showErrorMms = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  salir() {
    this.modalController.dismiss();
  }

  enviar() {
    // aunque se comprueba en el disabled comprobar si los password son igual
    if (this.passwordA !== this.passwordB) {
      this.showErrorMms = true;
    }
    // TODO: servicio en atleta que manda el reseteo de password
    // cuando devuelva ok dissmiss de este componente + toast ok
    // si error mostrar toast con el error
  }

}
