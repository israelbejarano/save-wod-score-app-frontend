import { Injectable } from '@angular/core';
import { Atleta } from '../models/interfaces/atleta';

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
    img: './assets/img/avatar-grey.png'
  };

  constructor() { }

  public getAtletaData(): Atleta {
    return this.atletaPrueba;
  }
}
