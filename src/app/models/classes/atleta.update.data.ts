import { AtletaUpdateDataInterface } from '../interfaces/atleta.update.data';

export class AtletaUpdateData implements AtletaUpdateDataInterface {
    id: number;
    altura: number;
    peso: number;
    nombre: string;
    email: string;
    fNacimiento: Date;
    img: string;
}
