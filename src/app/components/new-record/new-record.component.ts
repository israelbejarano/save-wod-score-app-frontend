import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RecordsService } from '../../services/records.service';
import { GrupoRecords } from '../../models/interfaces/grupo.records';
import { TipoRecord } from '../../models/interfaces/tipo.record';

// TODO: llevarlo a una iterfaz y a una clase
class ModeloRecord {
  gruposRecordsModel: GrupoRecords;
  tipoRecordModel: TipoRecord;
  kilos: number;
  repeticiones: number;
  chaleco: any;
}

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {

  gruposRecords: GrupoRecords[];
  tiposRecords: TipoRecord[] = [];

  modeloRecord: ModeloRecord = new ModeloRecord();

  constructor(private modalController: ModalController,
              private recordsService: RecordsService) { }

  ngOnInit() {
    this.gruposRecords = this.recordsService.getGruposRecords();
    // console.log('gruposRecords: ', this.gruposRecords);
  }

  getTiposEjercicios() {
    // console.log('modelo grupo record: ', this.gruposRecordsModel);
    this.tiposRecords = this.recordsService.getTiposRecordsByGrupoRecord(this.modeloRecord.gruposRecordsModel);
  }

  showFormulario() {
    // console.log('modelo tipos de records: ', this.tipoRecordModel);
  }

  guardar() {
    console.log('modelo: ', this.modeloRecord);
    // this.salir();
  }


  salir() {
    this.modalController.dismiss();
  }

}
