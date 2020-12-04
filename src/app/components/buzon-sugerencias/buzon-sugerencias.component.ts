import { Component, OnInit } from '@angular/core';
import { MensajesService } from '../../services/mensajes.service';

@Component({
  selector: 'app-buzon-sugerencias',
  templateUrl: './buzon-sugerencias.component.html',
  styleUrls: ['./buzon-sugerencias.component.scss'],
})
export class BuzonSugerenciasComponent implements OnInit {

  sugerencia: string;

  constructor(private mensajesService: MensajesService) { }

  ngOnInit() {}

  enviar() {
    console.log('sugerencia: ', this.sugerencia);
    // TODO: enviar sugerencia al back cuando se envie se muestra el toast de ok o de error.
    // de momento simulo mensaje ok a falta de implementar el back
    const mms = 'sugerencia enviada con éxito';
    this.mensajesService.showBottomToast(mms, 2000);
    setTimeout(() => {
      this.sugerencia = '';
    }, 200);
  }

}
