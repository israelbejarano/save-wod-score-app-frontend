import { Component, OnInit, OnDestroy } from '@angular/core';
import { AtletasService, UsuariosService } from '../services/api.services';
import { IAtleta, IUsuario } from '../models/interfaces/api.interfaces';
import { PopoverController } from '@ionic/angular';
import { OpcionesComponent } from '../components/shared/opciones/opciones.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {

  atleta: IAtleta;
  usuario: IUsuario;

  updateUsuarioSubscription: Subscription;

  constructor(private atletasService: AtletasService,
              private usuariosService: UsuariosService,
              public popoverCtrl: PopoverController) {}


  ngOnDestroy(): void {
    if (this.updateUsuarioSubscription) {
      this.updateUsuarioSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.usuario = this.usuariosService.getUsuarioPrueba();
    this.updateUsuarioSubscription = this.usuariosService.usuarioUpdateadoEvent.subscribe((usuarioUpdateado: IUsuario) => {
      this.usuario = usuarioUpdateado;
    });
  }

  async abrirOpciones(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: OpcionesComponent,
      componentProps: {
        usuario: this.usuario
      },
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}
