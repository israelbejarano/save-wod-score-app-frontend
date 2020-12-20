import { IAtleta } from './atleta';
export interface IWod {
    id: number;
    atleta: IAtleta;
    fRealizacion: Date;
    wod: string;
    resultado: string;
    observaciones: string;
}
