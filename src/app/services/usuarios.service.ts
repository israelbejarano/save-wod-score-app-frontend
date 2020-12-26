import { Injectable, EventEmitter } from '@angular/core';
import { IUsuario } from '../models/interfaces/api.interfaces';
import { Atleta } from '../models/classes/api.classes';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private usuarioPrueba: IUsuario = {
    id: 1,
    password: '123456aA',
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

  private idUsuario = 2;

  nuevoPasswordEvent = new EventEmitter();
  usuarioCreadoEvent = new EventEmitter();

  constructor() {
    this.usuariosPrueba.push(this.usuarioPrueba);
  }

  public getUsuarios(): IUsuario[] {
    return this.usuariosPrueba;
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

  public resetearPassword(email: string) {
    const usuario: IUsuario = this.getUsuarioByEmail(email);
    if (usuario) {
      // TODO: enviar al back la orden de mandar un correo con
      // password temporal y todo eso
      // 0 = ok
      this.nuevoPasswordEvent.emit(0);
    } else {
      // 1 = not_ok
      this.nuevoPasswordEvent.emit(1);
    }
  }

  public crearUsuario(nuevoUsuario: IUsuario, nombre: string) {
    const usuario: IUsuario = this.getUsuarioByEmail(nuevoUsuario.email);
    if (usuario) {
      this.usuarioCreadoEvent.emit('Ya existe el email, prueba a logearte.');
    } else {
      nuevoUsuario.activo = true;
      nuevoUsuario.premium = false;
      nuevoUsuario.id = this.idUsuario;
      nuevoUsuario.atleta = new Atleta();
      nuevoUsuario.atleta.nombre = nombre;
      nuevoUsuario.atleta.email = nuevoUsuario.email;
      nuevoUsuario.atleta.id = this.idUsuario;
      this.usuariosPrueba.push(nuevoUsuario);
      ++this.idUsuario;
      this.usuarioCreadoEvent.emit('ok');
    }
  }
}
