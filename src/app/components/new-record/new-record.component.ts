import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-record',
  templateUrl: './new-record.component.html',
  styleUrls: ['./new-record.component.scss'],
})
export class NewRecordComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  guardar() {
    this.salir();
  }


  salir() {
    this.modalController.dismiss();
  }

}
