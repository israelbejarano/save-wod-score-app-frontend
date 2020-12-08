import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecordsService } from '../../services/records.service';
import { IAtleta, IRecord } from 'src/app/models/interfaces/api.interfaces';
import { AtletasService } from '../../services/atletas.service';

@Component({
  selector: 'app-records-list',
  templateUrl: './records-list.component.html',
  styleUrls: ['./records-list.component.scss'],
})
export class RecordsListComponent implements OnInit {

  atleta: IAtleta;
  records: IRecord[];

  constructor(private atletasService: AtletasService,
              private recordsService: RecordsService) { }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.records = this.recordsService.getListadoRecordOfAtleta(this.atleta);
  }

}
