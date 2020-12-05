import { Injectable } from '@angular/core';
import { GrupoRecords } from '../models/interfaces/grupo.records';
import { TipoRecord } from '../models/interfaces/tipo.record';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private gruposRecords: GrupoRecords[] = [
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
      nombre: 'Máquinas ergómetras'
    },
    {
      id: 6,
      nombre: 'Carrera'
    }
  ];

  private tiposRecords: TipoRecord[] = [
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
    }
  ];

  constructor() { }
}
