import { Component, OnInit } from '@angular/core';
import { AtletasService } from '../services/atletas.service';
import { IAtleta } from '../models/interfaces/api.interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  atleta: IAtleta;

  constructor(private atletasService: AtletasService) {}

  ngOnInit() {
    this.atleta = this.atletasService.getAtletaData();
  }

}
