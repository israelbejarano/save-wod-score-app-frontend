import { ISugerencia } from '../interfaces/sugerencia';
import { IAtleta } from '../interfaces/atleta';

export class Sugerencia implements ISugerencia {
    id: number;
    atleta: IAtleta;
    mms: string;

}
