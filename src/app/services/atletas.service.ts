import { EventEmitter, Injectable } from '@angular/core';
import { IAtleta } from '../models/interfaces/api.interfaces';
import { AtletaUpdateData, Sugerencia } from '../models/classes/api.classes';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {

  private atletaPrueba: IAtleta = {
    id: 1,
    altura: 179,
    peso: 78.9,
    nombre: 'Rich Froning Fraser',
    email: 'ritch.the-master@email.com',
    fNacimiento: new Date('02/02/1989'),
    img: './assets/img/avatar-grey.png',
    sexo: 'M'
  };

  private sugerencias: Sugerencia[] = [];

  updateAtletaEvent = new EventEmitter();
  createSugerenciaEvent = new EventEmitter();

  constructor() { }

  public getAtletaData(): IAtleta {
    return this.atletaPrueba;
  }

  public updateAtleta(atletaToUpdate: AtletaUpdateData) {
    if (atletaToUpdate.id === this.atletaPrueba.id) {
      this.atletaPrueba.nombre = atletaToUpdate.nombre;
      this.atletaPrueba.email = atletaToUpdate.email;
      this.atletaPrueba.altura = atletaToUpdate.altura;
      this.atletaPrueba.peso = atletaToUpdate.peso;
      this.atletaPrueba.fNacimiento = atletaToUpdate.fNacimiento;
      this.atletaPrueba.img = atletaToUpdate.img;
      this.atletaPrueba.sexo = atletaToUpdate.sexo;
      this.updateAtletaEvent.emit(this.atletaPrueba);
    }
  }

  public crearSugerencia(sugerencia: Sugerencia) {
    this.sugerencias.push(sugerencia);
    this.createSugerenciaEvent.emit();
  }
}
