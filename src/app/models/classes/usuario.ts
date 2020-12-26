import { IAtleta, IUsuario } from '../interfaces/api.interfaces';
export class Usuario implements IUsuario {
    id: number;
    atleta: IAtleta;
    email: string;
    password: string;
    activo: boolean;
    premium: boolean;
}
