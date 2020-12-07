import { IGrupoRecords } from './grupo.records';
import { ITipoRecord } from './tipo.record';

export interface IRecordCreateData {
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
