import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewRecordComponent } from '../../new-record/new-record.component';
import { NewWodComponent } from '../../new-wod/new-wod.component';

@Component({
  selector: 'app-create-rm-wod',
  templateUrl: './create-rm-wod.component.html',
  styleUrls: ['./create-rm-wod.component.scss'],
})
export class CreateRmWodComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  async nuevoRm() {
    const modal = await this.modalController.create({
      component: NewRecordComponent,
    });
    return await modal.present();
  }

  async nuevoWod() {
    const modal = await this.modalController.create({
      component: NewWodComponent,
    });
    return await modal.present();
  }

}
