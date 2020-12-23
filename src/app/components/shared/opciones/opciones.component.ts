import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {

  idiomasDisponibles: string[] = [];
  idiomaSeleccionado: string;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
    this.idiomaSeleccionado = this.translateService.getDefaultLang();
    this.idiomasDisponibles = this.translateService.getLangs();
  }

  salir() {}

  descargar() {}

  cambioIdioma() {}

  setIdioma() {
    this.translateService.setDefaultLang(this.idiomaSeleccionado);
  }

}
