import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AtletasService } from '../../services/atletas.service';
import { RecordsService } from '../../services/records.service';
import { MensajesService } from '../../services/mensajes.service';
import { Record } from '../../models/classes/api.classes';
import { IGrupoRecords, IRecord, ITipoRecord, IAtleta } from '../../models/interfaces/api.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit, OnDestroy {

  private atleta: IAtleta;

  gruposRecords: IGrupoRecords[];
  tiposRecords: ITipoRecord[] = [];

  modeloRecord: Record = new Record();
  tiempo = '00:00:00';
  fRealizacion: string;

  puedeGuardarRecord = false;

  createRecordSubscription: Subscription;

  constructor(private modalController: ModalController,
              private atletasService: AtletasService,
              private recordsService: RecordsService,
              private router: Router,
              private mensajesService: MensajesService) { }


  ngOnDestroy(): void {
    if (this.createRecordSubscription) {
      this.createRecordSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.gruposRecords = this.recordsService.getGruposRecords();
    // console.log('gruposRecords: ', this.gruposRecords);
    this.modeloRecord.rm = true;
    this.atleta = this.atletasService.getAtletaData();
    this.createRecordSubscription = this.recordsService.createRecordEvent.subscribe((records: IRecord[]) => {
      console.log('subscrition a record: ', records);
      const toastMms = 'Record creado con éxito';
      this.mensajesService.showBottomToast(toastMms, 2000);
      setTimeout(() => {
        this.modeloRecord = new Record();
        this.fRealizacion = '';
        this.modeloRecord.rm = true;
      }, 200);
    });
  }

  getTiposEjercicios() {
    // console.log('modelo grupo record: ', this.gruposRecordsModel);
    if (this.modeloRecord.gruposRecordsModel) {
      this.tiposRecords = this.recordsService.getTiposRecordsByGrupoRecord(this.modeloRecord.gruposRecordsModel);
    }
  }

  guardar() {
    this.modeloRecord.atleta = this.atleta;
    this.modeloRecord.tiempo = this.tiempo;
    this.modeloRecord.fRealizacion = new Date(this.fRealizacion);
    // console.log('modelo: ', this.modeloRecord);
    this.recordsService.createRecord(this.modeloRecord);
    this.router.navigate(['main', 'listado-records']);
    this.salir();
  }

  salir() {
    this.modalController.dismiss();
  }

  guardarRecord(varAValidar) {
    // console.log('var a validar:', varAValidar);
    if (varAValidar) {
      this.puedeGuardarRecord = true;
    } else {
      this.puedeGuardarRecord = false;
    }
  }

}
