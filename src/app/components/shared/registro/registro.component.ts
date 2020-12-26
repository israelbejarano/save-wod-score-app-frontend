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
    const puedoCrearUsuario: boolean = this.comprobarFormulario(this.email, this.passwordA);
    if (puedoCrearUsuario) {
      const nuevoUsuario: Usuario = new Usuario();
      nuevoUsuario.email = this.email;
      nuevoUsuario.password = this.passwordA;
      // TODO: servicio crear usuario
    }
  }

  salir() {
    this.modalController.dismiss();
  }

  private comprobarFormulario(email: string, password: string): boolean {
    let resultado = true;
    if (this.passwordA.length < 7 || !/[A-Z]/.test(this.passwordA) || !/[a-z]/.test(this.passwordA) || !/\d/.test(this.passwordA)) {
      this.showPasswordError = true;
      resultado = false;
    }
    if (!this.emailIsValid(this.email)) {
      this.showEmailError = true;
      resultado = false;
    }
    return resultado;
  }

  private emailIsValid(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

}
