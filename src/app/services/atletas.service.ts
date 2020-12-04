import { Injectable } from '@angular/core';
import { Atleta } from '../models/interfaces/atleta';

@Injectable({
  providedIn: 'root'
})
export class AtletasService {

  private atletaPrueba: Atleta = {
    altura: 179,
    peso: 78.9
  };

  constructor() { }

  public getAtletaData(): Atleta {
    return this.atletaPrueba;
  }
}
