import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewRecordComponent } from '../components/new-record/new-record.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private modalController: ModalController) {}

  async nuevoRm() {
    const modal = await this.modalController.create({
      component: NewRecordComponent,
    });
    return await modal.present();
  }

}
