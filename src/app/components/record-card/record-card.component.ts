import { Component, Input, OnInit } from '@angular/core';
import { IRecord } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-record-card',
  templateUrl: './record-card.component.html',
  styleUrls: ['./record-card.component.scss'],
})
export class RecordCardComponent implements OnInit {

  @Input() record: IRecord;

  constructor() { }

  ngOnInit() {
    console.log('record: ', this.record);
  }

}
