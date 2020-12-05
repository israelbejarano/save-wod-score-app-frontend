import { EventEmitter, Injectable } from '@angular/core';
import { Atleta } from '../models/interfaces/atleta';
import { AtletaUpdateData } from '../models/classes/atleta.update.data';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {

  private atletaPrueba: Atleta = {
    id: 1,
    altura: 179,
    peso: 78.9,
    nombre: 'Rich Froning Fraser',
    email: 'ritch.the-master@email.com',
    fNacimiento: new Date('02/02/1989'),
    img: './assets/img/avatar-grey.png',
    sexo: 'M'
  };

  updateAtletaEvent = new EventEmitter();

  constructor() { }

  public getAtletaData(): Atleta {
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
}
