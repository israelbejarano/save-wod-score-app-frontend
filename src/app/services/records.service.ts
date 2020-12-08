import { Injectable, EventEmitter } from '@angular/core';
import { IGrupoRecords, ITipoRecord, IRecord } from '../models/interfaces/api.interfaces';
import { Record } from '../models/classes/api.classes';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private gruposRecords: IGrupoRecords[] = [
    {
      id: 1,
      nombre: 'Fuerza'
    },
    {
      id: 2,
      nombre: 'Halterofilia'
    },
    {
      id: 3,
      nombre: 'Gimnásticos'
    },
    {
      id: 4,
      nombre: 'CF Benchmarks'
    },
    {
      id: 5,
      nombre: 'Máq. Ergómetras'
    },
    {
      id: 6,
      nombre: 'Carrera'
    }
  ];

  private tiposRecords: ITipoRecord[] = [
    {
      id: 1,
      nombre: 'Peso muerto',
      idGrupoRecord: 1
    },
    {
      id: 2,
      nombre: 'Sentadilla trasera',
      idGrupoRecord: 1
    },
    {
      id: 3,
      nombre: 'Press banca',
      idGrupoRecord: 1
    },
    {
      id: 4,
      nombre: 'Pull up lastrada',
      idGrupoRecord: 1
    },
    {
      id: 5,
      nombre: 'Sentadilla frontal',
      idGrupoRecord: 1
    },
    {
      id: 6,
      nombre: 'Sentadilla overhead',
      idGrupoRecord: 1
    },
    {
      id: 7,
      nombre: 'Peso muerto sumo',
      idGrupoRecord: 1
    },
    {
      id: 8,
      nombre: 'Peso muerto snatch',
      idGrupoRecord: 1
    },
    {
      id: 9,
      nombre: 'Clean & Jerk',
      idGrupoRecord: 2
    },
    {
      id: 10,
      nombre: 'Snatch',
      idGrupoRecord: 2
    },
    {
      id: 11,
      nombre: 'Power clean & Jerk',
      idGrupoRecord: 2
    },
    {
      id: 12,
      nombre: 'Power snatch',
      idGrupoRecord: 2
    },
    {
      id: 13,
      nombre: 'Muscle clean',
      idGrupoRecord: 2
    },
    {
      id: 14,
      nombre: 'Muscle snatch',
      idGrupoRecord: 2
    },
    {
      id: 15,
      nombre: 'Squat clean',
      idGrupoRecord: 2
    },
    {
      id: 16,
      nombre: 'Power Clean',
      idGrupoRecord: 2
    },
    {
      id: 17,
      nombre: 'Hang power clean',
      idGrupoRecord: 2
    },
    {
      id: 18,
      nombre: 'Hang squat clean',
      idGrupoRecord: 2
    },
    {
      id: 19,
      nombre: 'Hang power snatch',
      idGrupoRecord: 2
    },
    {
      id: 20,
      nombre: 'Hang squat snatch',
      idGrupoRecord: 2
    },
    {
      id: 21,
      nombre: 'Clean pull',
      idGrupoRecord: 2
    },
    {
      id: 22,
      nombre: 'Snatch pull',
      idGrupoRecord: 2
    },
    {
      id: 23,
      nombre: 'Press estricto',
      idGrupoRecord: 2
    },
    {
      id: 24,
      nombre: 'Push press',
      idGrupoRecord: 2
    },
    {
      id: 25,
      nombre: 'Push jerk',
      idGrupoRecord: 2
    },
    {
      id: 26,
      nombre: 'Split jerk',
      idGrupoRecord: 2
    },
    {
      id: 27,
      nombre: 'Pull ups',
      idGrupoRecord: 3
    },
    {
      id: 28,
      nombre: 'Kipping pull ups',
      idGrupoRecord: 3
    },
    {
      id: 29,
      nombre: 'Butterfly pull ups',
      idGrupoRecord: 3
    },
    {
      id: 30,
      nombre: 'Bar muscle ups',
      idGrupoRecord: 3
    },
    {
      id: 31,
      nombre: 'Ring muscle ups',
      idGrupoRecord: 3
    },
    {
      id: 32,
      nombre: 'Strict bar muscle ups',
      idGrupoRecord: 3
    },
    {
      id: 33,
      nombre: 'Strict ring muscle ups',
      idGrupoRecord: 3
    },
    {
      id: 34,
      nombre: 'Pies a barra',
      idGrupoRecord: 3
    },
    {
      id: 35,
      nombre: 'Push ups',
      idGrupoRecord: 3
    },
    {
      id: 36,
      nombre: 'Fondos pino estrictos',
      idGrupoRecord: 3
    },
    {
      id: 37,
      nombre: 'Fondos pino kipping',
      idGrupoRecord: 3
    },
    {
      id: 38,
      nombre: 'Pino estático',
      idGrupoRecord: 3
    },
    {
      id: 39,
      nombre: 'Pino caminando',
      idGrupoRecord: 3
    },
    {
      id: 40,
      nombre: 'Angie',
      idGrupoRecord: 4
    },
    {
      id: 41,
      nombre: 'Barbara',
      idGrupoRecord: 4
    },
    {
      id: 42,
      nombre: 'Chelsea',
      idGrupoRecord: 4
    },
    {
      id: 43,
      nombre: 'Cindy',
      idGrupoRecord: 4
    },
    {
      id: 44,
      nombre: 'Diane',
      idGrupoRecord: 4
    },
    {
      id: 45,
      nombre: 'Elizabeth',
      idGrupoRecord: 4
    },
    {
      id: 46,
      nombre: 'Fran',
      idGrupoRecord: 4
    },
    {
      id: 47,
      nombre: 'Grace',
      idGrupoRecord: 4
    },
    {
      id: 48,
      nombre: 'Helen',
      idGrupoRecord: 4
    },
    {
      id: 49,
      nombre: 'Isabel',
      idGrupoRecord: 4
    },
    {
      id: 50,
      nombre: 'Jackie',
      idGrupoRecord: 4
    },
    {
      id: 51,
      nombre: 'Karen',
      idGrupoRecord: 4
    },
    {
      id: 52,
      nombre: 'Linda',
      idGrupoRecord: 4
    },
    {
      id: 53,
      nombre: 'Mary',
      idGrupoRecord: 4
    },
    {
      id: 54,
      nombre: 'Nancy',
      idGrupoRecord: 4
    },
    {
      id: 55,
      nombre: 'Annie',
      idGrupoRecord: 4
    },
    {
      id: 56,
      nombre: 'Eva',
      idGrupoRecord: 4
    },
    {
      id: 57,
      nombre: 'Kelly',
      idGrupoRecord: 4
    },
    {
      id: 58,
      nombre: 'Lynne',
      idGrupoRecord: 4
    },
    {
      id: 59,
      nombre: 'Nicole',
      idGrupoRecord: 4
    },
    {
      id: 60,
      nombre: 'Amanda',
      idGrupoRecord: 4
    },
    {
      id: 61,
      nombre: 'JT',
      idGrupoRecord: 4
    },
    {
      id: 62,
      nombre: 'Fran',
      idGrupoRecord: 4
    },
    {
      id: 63,
      nombre: '500m row',
      idGrupoRecord: 5,
    },
    {
      id: 64,
      nombre: '1000m row',
      idGrupoRecord: 5,
    },
    {
      id: 65,
      nombre: '1500m row',
      idGrupoRecord: 5,
    },
    {
      id: 66,
      nombre: '500m sky erg',
      idGrupoRecord: 5,
    },
    {
      id: 67,
      nombre: '1000m sky erg',
      idGrupoRecord: 5,
    },
    {
      id: 68,
      nombre: '1500m sky erg',
      idGrupoRecord: 5,
    },
    {
      id: 69,
      nombre: '500m abike',
      idGrupoRecord: 5,
    },
    {
      id: 70,
      nombre: '1000m abike',
      idGrupoRecord: 5,
    },
    {
      id: 71,
      nombre: '1500m abike',
      idGrupoRecord: 5,
    },
    {
      id: 72,
      nombre: '100m run',
      idGrupoRecord: 6,
    },
    {
      id: 73,
      nombre: '200m run',
      idGrupoRecord: 6,
    },
    {
      id: 74,
      nombre: '400m run',
      idGrupoRecord: 6,
    },
    {
      id: 75,
      nombre: '1000m run',
      idGrupoRecord: 6,
    },
    {
      id: 76,
      nombre: '5000m run',
      idGrupoRecord: 6,
    },
    {
      id: 77,
      nombre: '1 mile run',
      idGrupoRecord: 6,
    }
  ];

  private records: IRecord[] = [
    {
      id: 1,
      gruposRecordsModel: {
        id: 1,
        nombre: 'Fuerza'
      },
      tipoRecordModel: {
        id: 1,
        nombre: 'Peso muerto',
        idGrupoRecord: 1
      },
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      kilos: 200,
      rm: true,
      pr: true,
      fRealizacion: new Date('2020-12-08'),
      repeticiones: null,
      chaleco: null,
      tiempo: null,
      observaciones: null
    },
    {
      id: 2,
      gruposRecordsModel: {
        id: 3,
        nombre: 'Gimnásticos'
      },
      tipoRecordModel: {
        id: 29,
        nombre: 'Butterfly pull ups',
        idGrupoRecord: 3
      },
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      kilos: null,
      rm: true,
      pr: null,
      fRealizacion: new Date('2020-10-20'),
      repeticiones: 50,
      chaleco: null,
      tiempo: null,
      observaciones: 'prueba observaciones'
    },
    {
      id: 3,
      gruposRecordsModel: {
        id: 2,
        nombre: 'Halterofilia'
      },
      tipoRecordModel: {
        id: 10,
        nombre: 'Snatch',
        idGrupoRecord: 2
      },
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      kilos: 95.5,
      rm: true,
      pr: true,
      fRealizacion: new Date('2020-08-16'),
      repeticiones: null,
      chaleco: null,
      tiempo: null,
      observaciones: 'Metí este snatch después de seguir el mesociclo.'
    },
    {
      id: 4,
      gruposRecordsModel: {
        id: 5,
        nombre: 'Máq. Ergómetras'
      },
      tipoRecordModel: {
        id: 65,
        nombre: '1500m row',
        idGrupoRecord: 5,
      },
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      kilos: null,
      rm: true,
      pr: true,
      fRealizacion: new Date('2020-03-05'),
      repeticiones: null,
      chaleco: null,
      tiempo: '00:05:13',
      observaciones: null
    },
    {
      id: 5,
      gruposRecordsModel: {
        id: 4,
        nombre: 'CF Benchmarks'
      },
      tipoRecordModel: {
        id: 62,
        nombre: 'Fran',
        idGrupoRecord: 4
      },
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      kilos: null,
      rm: true,
      pr: null,
      fRealizacion: new Date('2020-07-12'),
      repeticiones: null,
      chaleco: null,
      tiempo: '00:02:05',
      observaciones: 'Ejemplo de Fran realizado por un pro'
    },
    {
      id: 6,
      gruposRecordsModel: {
        id: 6,
        nombre: 'Carrera'
      },
      tipoRecordModel: {
        id: 74,
        nombre: '400m run',
        idGrupoRecord: 6,
      },
      atleta: {
        id: 1,
        altura: 179,
        peso: 78.9,
        nombre: 'Rich Froning Fraser',
        email: 'ritch.the-master@email.com',
        fNacimiento: new Date('02/02/1989'),
        img: './assets/img/avatar-grey.png',
        sexo: 'M'
      },
      kilos: null,
      rm: true,
      pr: true,
      fRealizacion: new Date('2020-09-26'),
      repeticiones: null,
      chaleco: null,
      tiempo: '00:01:15',
      observaciones: null
    }
  ];
  private recordId = 7;

  createRecordEvent = new EventEmitter();

  constructor() { }

  public getGruposRecords(): IGrupoRecords[] {
    return this.gruposRecords;
  }

  public getTiposRecordsByGrupoRecord(grupoRecord: IGrupoRecords): ITipoRecord[] {
    const tiposRecordsOfGruposRecords: ITipoRecord[] = [];
    this.tiposRecords.forEach(tipoRecord => {
      if (tipoRecord.idGrupoRecord === grupoRecord.id) {
        tiposRecordsOfGruposRecords.push(tipoRecord);
      }
    });
    return tiposRecordsOfGruposRecords;
  }

  public createRecord(nuevoRecord: Record) {
    let newRecord: Record = new Record();
    newRecord = nuevoRecord;
    newRecord.id = this.recordId;
    this.records.push(newRecord);
    this.createRecordEvent.emit(this.records);
    ++this.recordId;

  }
}
