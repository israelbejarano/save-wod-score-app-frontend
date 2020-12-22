import { Injectable, EventEmitter } from '@angular/core';
import { Wod } from '../models/classes/api.classes';
import { IWod } from '../models/interfaces/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WodsService {

  private wods: IWod[] = [
    {
      id: 1,
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      fRealizacion: new Date('2020-12-08'),
      wod: '40-30-20-10 \n box jump \n am swing @32/24kg \n 1 arm farmer carry',
      resultado: `16' 02''`,
      observaciones: 'Rx'
    }
  ];
  private wodId = 2;

  createWodEvent = new EventEmitter();

  constructor() { }

  public createWod(nuevoWod: Wod) {
    let newWod: Wod = new Wod();
    newWod = nuevoWod;
    newWod.id = this.wodId;
    this.wods.push(newWod);
    this.createWodEvent.emit(this.wods);
    ++this.wodId;
  }
}
