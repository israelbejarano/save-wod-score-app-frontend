import { Component, Input, OnInit } from '@angular/core';
import { IWod } from '../../models/interfaces/api.interfaces';

@Component({
  selector: 'app-wod-card',
  templateUrl: './wod-card.component.html',
  styleUrls: ['./wod-card.component.scss'],
})
export class WodCardComponent implements OnInit {

  @Input() wod: IWod;

  constructor() { }

  ngOnInit() {
    console.log('wod: ', this.wod);
  }

}
