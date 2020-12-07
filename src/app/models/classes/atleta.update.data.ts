import { IAtletaUpdateData } from '../interfaces/atleta.update.data';

export class AtletaUpdateData implements IAtletaUpdateData {
    id: number;
    altura: number;
    peso: number;
    nombre: string;
    email: string;
    fNacimiento: Date;
    img: string;
    sexo: string;
}
