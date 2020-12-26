import { IAtleta } from './api.interfaces';

export interface IUsuario {
    id: number;
    atleta: IAtleta;
    email: string;
    password: string;
    activo: boolean;
    premium: boolean;
}
