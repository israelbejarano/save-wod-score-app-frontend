import { Injectable, EventEmitter } from '@angular/core';
import { Wod } from '../models/classes/api.classes';
import { IWod } from '../models/interfaces/api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class WodsService {

  createWodEvent = new EventEmitter();

  private wods: IWod[] = [];
  private wodId = 1;

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
