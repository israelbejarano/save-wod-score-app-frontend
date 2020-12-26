import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../../models/classes/api.classes';

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

  showPasswordError = false;
  showEmailError = false;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  crear() {
    this.showPasswordError = false;
    this.showEmailError = false;
    if (this.passwordA.length < 7 || !/[A-Z]/.test(this.passwordA) || !/[a-z]/.test(this.passwordA) || !/\d/.test(this.passwordA)) {
      this.showPasswordError = true;
    }
    if (!this.emailIsValid(this.email)) {
      this.showEmailError = true;
    }
    const nuevoUsuario: Usuario = new Usuario();
  }

  salir() {
    this.modalController.dismiss();
  }

  private emailIsValid(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

}
