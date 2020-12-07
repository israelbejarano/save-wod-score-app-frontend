import { IGrupoRecords } from '../interfaces/grupo.records';
import { IRecordCreateData } from '../interfaces/record.create.data';
import { ITipoRecord } from '../interfaces/tipo.record';
import { IAtleta } from '../interfaces/atleta';

export class RecordCreateData implements IRecordCreateData {

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
