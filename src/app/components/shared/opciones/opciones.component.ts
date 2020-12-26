import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';
import { UsuariosService } from '../../../services/api.services';
import { IUsuario } from '../../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {

  @Input() usuario: IUsuario;

  idiomasDisponibles: string[] = [];
  idiomaSeleccionado: string;

  constructor(private translateService: TranslateService,
              private usuariosService: UsuariosService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.idiomaSeleccionado = this.translateService.getDefaultLang();
    this.idiomasDisponibles = this.translateService.getLangs();
    console.log('usuario: ', this.usuario);
  }

  // TODO: quitar el async y todo lo de mostrar el login
  async salir() {
    // TODO: hacer el logout redirect a login y todo eso
    // TODO: de momento lo voy a usar para maquetar el login
    const modal = await this.modalController.create({
      component: LoginComponent,
    });
    return await modal.present();
  }

  descargar() {}

  setPremium(hacerPremium: boolean) {
    // TODO: hacer un alert controller que lleve a una pasarela de pago
    // tanto para activar como para anular
    this.usuario.premium = hacerPremium;
    this.usuariosService.updateUsuario(this.usuario);
  }

  setActivo(activar: boolean) {
    // TODO: hacer un alert controller para confirmar
    this.usuario.activo = activar;
    this.usuariosService.updateUsuario(this.usuario);
  }

  setIdioma() {
    this.translateService.setDefaultLang(this.idiomaSeleccionado);
  }

}
