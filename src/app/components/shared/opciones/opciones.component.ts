import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones',
  templateUrl: './opciones.component.html',
  styleUrls: ['./opciones.component.scss'],
})
export class OpcionesComponent implements OnInit {

  // TODO: traer los idiomas disponibles del LanguagesInfo

  idiomaSeleccionado = 'es-ES';  // TODO: esto hacerlo dinamico con localstorage y por defecto español

  constructor() { }

  ngOnInit() {}

  salir() {}

  descargar() {}

  cambioIdioma() {}

}
