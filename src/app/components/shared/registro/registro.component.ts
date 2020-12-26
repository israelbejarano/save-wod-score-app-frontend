import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Usuario } from '../../../models/classes/api.classes';
import { UsuariosService, MensajesService } from '../../../services/api.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit, OnDestroy {

  email: string;
  nombre: string;
  passwordA: string;
  passwordB: string;

  showPasswordError = false;
  showEmailError = false;

  nuevoUsuarioSubscription: Subscription;

  constructor(private modalController: ModalController,
              private mensajesService: MensajesService,
              private usuariosService: UsuariosService) { }


  ngOnDestroy(): void {
    if (this.nuevoUsuarioSubscription) {
      this.nuevoUsuarioSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.nuevoUsuarioSubscription = this.usuariosService.usuarioCreadoEvent.subscribe(resp => {
      console.log(resp);
      let mms: string;
      if (resp !== 'ok') {
        mms = resp;
        // TODO: mandar toast de error
      } else {
        mms = 'Usuario creado con éxito.'
      }
      setTimeout(() => {
        this.mensajesService.showBottomToast(mms, 2000);
        if (resp === 'ok') {
          this.salir();
        }
      }, 2000);
    });
  }

  crear() {
    this.showPasswordError = false;
    this.showEmailError = false;
    const puedoCrearUsuario: boolean = this.comprobarFormulario(this.email, this.passwordA);
    if (puedoCrearUsuario) {
      const nuevoUsuario: Usuario = new Usuario();
      nuevoUsuario.email = this.email;
      nuevoUsuario.password = this.passwordA;
      this.usuariosService.crearUsuario(nuevoUsuario, this.nombre);
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
