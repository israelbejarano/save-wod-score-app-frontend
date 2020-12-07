import { IGrupoRecords } from './grupo.records';
import { ITipoRecord } from './tipo.record';
import { IAtleta } from './atleta';

export interface IRecord {

    id: number;
    gruposRecordsModel: IGrupoRecords;
    tipoRecordModel: ITipoRecord;
    atleta: IAtleta;
    kilos: number;
    repeticiones: number;
    chaleco: boolean;
    tiempo: string;
    rm: boolean;
    pr: boolean;
    fRealizacion: Date;
    observaciones: string;
}
