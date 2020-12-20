import { IAtleta, IWod } from '../interfaces/api.interfaces';

export class Wod implements IWod {
    id: number;
    atleta: IAtleta;
    fRealizacion: Date;
    wod: string;
    resultado: string;
    observaciones: string;
}
