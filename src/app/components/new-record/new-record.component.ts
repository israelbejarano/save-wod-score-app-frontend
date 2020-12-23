import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AtletasService, RecordsService } from '../../services/api.services';
import { Record } from '../../models/classes/api.classes';
import { IGrupoRecords, ITipoRecord, IAtleta } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {

  private atleta: IAtleta;

  gruposRecords: IGrupoRecords[];
  tiposRecords: ITipoRecord[] = [];

  modeloRecord: Record = new Record();
  tiempo = '00:00:00';
  fRealizacion: string;

  puedeGuardarRecord = false;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService,
              private recordsService: RecordsService,
              private router: Router,
              ) { }


  ngOnInit() {
    this.gruposRecords = this.recordsService.getGruposRecords();
    // console.log('gruposRecords: ', this.gruposRecords);
    this.modeloRecord.rm = true;
    this.atleta = this.atletasService.getAtletaData();
  }

  getTiposEjercicios() {
    // console.log('modelo grupo record: ', this.gruposRecordsModel);
    if (this.modeloRecord.gruposRecordsModel) {
      this.tiposRecords = this.recordsService.getTiposRecordsByGrupoRecord(this.modeloRecord.gruposRecordsModel);
    }
  }

  guardar() {
    this.modeloRecord.atleta = this.atleta;
    if (this.tiempo !== '00:00:00') {
      this.modeloRecord.tiempo = this.tiempo;
    }
    if (this.fRealizacion) {
      this.modeloRecord.fRealizacion = new Date(this.fRealizacion);
    }
    console.log('modelo: ', this.modeloRecord);
    this.recordsService.createRecord(this.modeloRecord);
    this.router.navigate(['main', 'listado-records']);
    this.salir();
  }

  salir() {
    this.modalController.dismiss();
  }

  guardarRecord(varAValidar) {
    // console.log('var a validar:', varAValidar);
    if (varAValidar && this.fRealizacion) {
      this.puedeGuardarRecord = true;
    } else {
      this.puedeGuardarRecord = false;
    }
  }

}
