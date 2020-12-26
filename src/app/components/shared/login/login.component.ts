import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RegistroComponent } from '../registro/registro.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';
import { UsuariosService, MensajesService } from '../../../services/api.services';
import { IUsuario } from '../../../models/interfaces/api.interfaces';

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

  constructor(private modalController: ModalController,
              private mensajesService: MensajesService,
              private usuariosService: UsuariosService) { }

  ngOnInit() {}

  login() {
    const usuario: IUsuario = this.usuariosService.getUsuarioByEmail(this.email);
    if (usuario) {
      if (usuario.password !== this.password) {
        if (this.password !== '123456aA') {
          ++this.contadorFalloPassword;
          this.password = '';
        }
        if (this.contadorFalloPassword >= 3) {
          this.passwordOlvidado = true;
        }
        const mms = 'Email o contraseña incorrecto';
        this.mensajesService.showBottomToast(mms, 2000);
      } else {
        this.modalController.dismiss();
      }
    }
  }

  async registrar() {
    const modal = await this.modalController.create({
      component: RegistroComponent,
      componentProps: {

      }
    });
    return await modal.present();
  }

  async resetPassword() {
    const modal = await this.modalController.create({
      component: ResetPasswordComponent,
      componentProps: {

      }
    });
    return await modal.present();
  }

}
