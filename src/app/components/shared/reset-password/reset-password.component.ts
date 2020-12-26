import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UsuariosService, MensajesService } from '../../../services/api.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {

  email: string;
  passwordA: string;
  passwordB: string;
  showErrorMms = false;

  nuevoPasswordSubscription: Subscription;

  constructor(private modalController: ModalController,
              private mensajesService: MensajesService,
              private usuariosService: UsuariosService) { }


  ngOnDestroy(): void {
    if (this.nuevoPasswordSubscription) {
      this.nuevoPasswordSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.nuevoPasswordSubscription = this.usuariosService.nuevoPasswordEvent.subscribe(resp => {
      console.log('resp: ', resp);
      let mms: string;
      if (resp === 0) {
        mms = 'Contraseña cambiada con éxito.';
      } else {
        mms = 'Usuario no encontrado.';
      }
      setTimeout(() => {
        this.mensajesService.showBottomToast(mms, 2000);
        if (resp === 0) {
          this.salir();
        }
      }, 2000);
    });
  }

  salir() {
    this.modalController.dismiss();
  }

  enviar() {
    // aunque se comprueba en el disabled comprobar si los password son igual
    if (this.passwordA !== this.passwordB) {
      this.showErrorMms = true;
    }
    // TODO: comprobar que el password tenga +6 longitud y aA
    // para eso ver en otras apps mias la validación de password
    this.usuariosService.resetearPassword(this.email, this.passwordA);
  }

}
