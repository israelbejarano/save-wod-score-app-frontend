import { IAtleta } from './atleta';

export interface ISugerencia {
    id: number;
    atleta: IAtleta;
    sugerencia: string;
}
