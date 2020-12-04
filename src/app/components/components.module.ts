import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CardAtletaComponent } from './card-atleta/card-atleta.component';



@NgModule({
  declarations: [
    CardAtletaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    CardAtletaComponent
  ]
})
export class ComponentsModule { }
