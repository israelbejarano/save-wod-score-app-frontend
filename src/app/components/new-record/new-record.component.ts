import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecordsService } from '../../services/records.service';
import { IGrupoRecords } from '../../models/interfaces/grupo.records';
import { ITipoRecord } from '../../models/interfaces/tipo.record';
import { RecordCreateData } from '../../models/classes/record.create.data';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {

  gruposRecords: IGrupoRecords[];
  tiposRecords: ITipoRecord[] = [];

  modeloRecord: RecordCreateData = new RecordCreateData();
  tiempo = '00:00:00';
  fRealizacion: string;

  puedeGuardarRecord = false;

  constructor(private modalController: ModalController,
              private recordsService: RecordsService) { }

  ngOnInit() {
    this.gruposRecords = this.recordsService.getGruposRecords();
    // console.log('gruposRecords: ', this.gruposRecords);
    this.modeloRecord.rm = true;
  }

  getTiposEjercicios() {
    // console.log('modelo grupo record: ', this.gruposRecordsModel);
    this.tiposRecords = this.recordsService.getTiposRecordsByGrupoRecord(this.modeloRecord.gruposRecordsModel);
  }

  guardar() {
    this.modeloRecord.tiempo = this.tiempo;
    this.modeloRecord.fRealizacion = new Date(this.fRealizacion);
    console.log('modelo: ', this.modeloRecord);
    // TODO: llamar al servicio que crea el record
    // this.salir();
  }

  salir() {
    this.modalController.dismiss();
  }

  guardarRecord(varAValidar) {
    if (varAValidar) {
      this.puedeGuardarRecord = true;
    } else {
      this.puedeGuardarRecord = false;
    }
  }

}
