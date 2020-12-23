import { Component, OnDestroy, OnInit } from '@angular/core';
import { IAtleta, IRecord } from 'src/app/models/interfaces/api.interfaces';
import { AtletasService, RecordsService, MensajesService } from '../../services/api.services';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
})
export class RecordsListComponent implements OnInit, OnDestroy {

  atleta: IAtleta;
  records: IRecord[];

  createRecordSubscription: Subscription;

  constructor(private atletasService: AtletasService,
              private mensajesService: MensajesService,
              private recordsService: RecordsService) { }

  ngOnDestroy(): void {
    if (this.createRecordSubscription) {
      this.createRecordSubscription.unsubscribe();
    }
  }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.records = this.recordsService.getListadoRecordOfAtleta(this.atleta);
    this.createRecordSubscription = this.recordsService.createRecordEvent.subscribe((records: IRecord[]) => {
      console.log('subscrition a record: ', records);
      const toastMms = 'Record creado con éxito';
      this.mensajesService.showBottomToast(toastMms, 2000);
      setTimeout(() => {
        this.records = this.recordsService.getListadoRecordOfAtleta(this.atleta);
      }, 200);
    });
  }

}
