import { IGrupoRecords, IRecord, ITipoRecord, IAtleta } from '../interfaces/api.interfaces';

export class Record implements IRecord {

    id: number;
    atleta: IAtleta;
    gruposRecordsModel: IGrupoRecords;
    tipoRecordModel: ITipoRecord;
    kilos: number;
    repeticiones: number;
    chaleco: boolean;
    tiempo: string;
    rm: boolean;
    pr: boolean;
    fRealizacion: Date;
    observaciones: string;
}
