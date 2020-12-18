import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewRecordComponent } from '../components/new-record/new-record.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private modalController: ModalController) {}

  async nuevoRm() {
    const modal = await this.modalController.create({
      component: NewRecordComponent,
    });
    return await modal.present();
  }

  async nuevoWod() {
    const modal = await this.modalController.create({
      component: NewRecordComponent,
    });
    return await modal.present();
  }

}
