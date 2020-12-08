import { IAtleta } from '../interfaces/atleta';

export class Atleta implements IAtleta {
    id: number;
    altura: number;
    peso: number;
    nombre: string;
    email: string;
    fNacimiento: Date;
    img: string;
    sexo: string;
}
