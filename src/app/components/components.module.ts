import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CardAtletaComponent } from './card-atleta/card-atleta.component';
import { BuzonSugerenciasComponent } from './buzon-sugerencias/buzon-sugerencias.component';



@NgModule({
  declarations: [
    CardAtletaComponent,
    BuzonSugerenciasComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    CardAtletaComponent,
    BuzonSugerenciasComponent
  ]
})
export class ComponentsModule { }
