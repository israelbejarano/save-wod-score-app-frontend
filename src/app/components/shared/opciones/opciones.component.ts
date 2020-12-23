import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {

  idiomasDisponibles: string[] = [];
  idiomaSeleccionado: string;

  constructor(private translateService: TranslateService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.idiomaSeleccionado = this.translateService.getDefaultLang();
    this.idiomasDisponibles = this.translateService.getLangs();
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

  cambioIdioma() {}

  setIdioma() {
    this.translateService.setDefaultLang(this.idiomaSeleccionado);
  }

}
