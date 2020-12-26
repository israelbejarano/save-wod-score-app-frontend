import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from '../models/interfaces/api.interfaces';
import { MensajesService } from './api.services';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioPrueba: IUsuario = {
    id: 1,
    password: '123456',
    activo: true,
    premium: true,
    email: 'prueba@prueba.com',
    atleta: {
      id: 1,
      altura: 179,
      peso: 78.9,
      nombre: 'Rich Froning Fraser',
      email: 'prueba@prueba.com',
      fNacimiento: new Date('02/02/1989'),
      img: './assets/img/avatar-grey.png',
      sexo: 'M'
    }
  };

  private usuariosPrueba: IUsuario[] = [];

  nuevoPasswordEvent = new EventEmitter();

  constructor() {
    this.usuariosPrueba.push(this.usuarioPrueba);
  }

  public getUsuarioByEmail(email: string): IUsuario {
    let usuarioAbuscar: IUsuario;
    this.usuariosPrueba.forEach((usuario: IUsuario) => {
      if (usuario.email === email) {
        usuarioAbuscar = usuario;
      }
    });
    return usuarioAbuscar;
  }

  public resetearPassword(email: string, nuevoPassword: string) {
    const usuario: IUsuario = this.getUsuarioByEmail(email);
    if (usuario) {
      usuario.password = nuevoPassword;
      // 0 = ok
      this.nuevoPasswordEvent.emit(0);
    } else {
      // 1 = not_ok
      this.nuevoPasswordEvent.emit(1);
    }
  }
}
