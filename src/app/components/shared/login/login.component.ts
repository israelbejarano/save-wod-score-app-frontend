import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  logoUrl = './assets/img/logo.png';
  contadorFalloPassword = 0;
  passwordOlvidado = false;
  email: string;
  password: string;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  login() {
    if (this.password !== '123456aA') {
      ++this.contadorFalloPassword;
      this.password = '';
    }
    if (this.contadorFalloPassword >= 3) {
      this.passwordOlvidado = true;
    }
    // this.modalController.dismiss();
  }

  registrar() {}

  resetPassword() {}

}
