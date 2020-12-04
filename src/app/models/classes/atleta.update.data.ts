import { AtletaUpdateDataInterface } from '../interfaces/atleta.update.data';

export class AtletaUpdateData implements AtletaUpdateDataInterface {
    altura: number;
    peso: number;
    nombre: string;
    email: string;
}
