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
        mms = 'Se ha enviado un email al correo.';
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
    this.usuariosService.resetearPassword(this.email);
  }

}
