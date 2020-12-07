import { IGrupoRecords } from './grupo.records';
import { ITipoRecord } from './tipo.record';
import { IAtleta } from './atleta';

export interface IRecordCreateData {

    id: number;
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
    atleta: IAtleta;
}
