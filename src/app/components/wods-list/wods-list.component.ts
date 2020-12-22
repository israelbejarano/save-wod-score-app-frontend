import { Component, OnInit } from '@angular/core';
import { IAtleta, IWod } from '../../models/interfaces/api.interfaces';
import { AtletasService, WodsService } from '../../services/api.services';

@Component({
  selector: 'app-wods-list',
  templateUrl: './wods-list.component.html',
  styleUrls: ['./wods-list.component.scss'],
})
export class WodsListComponent implements OnInit {

  atleta: IAtleta;
  wods: IWod[];

  constructor(private atletasService: AtletasService,
              private wodsService: WodsService) { }

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
    this.wods = this.wodsService.getListadoWodOfAtleta(this.atleta);
  }

}
