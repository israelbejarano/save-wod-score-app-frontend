import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { CardAtletaComponent } from './card-atleta/card-atleta.component';
import { BuzonSugerenciasComponent } from './buzon-sugerencias/buzon-sugerencias.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { WodsListComponent } from './wods-list/wods-list.component';
import { WodCardComponent } from './wod-card/wod-card.component';
import { NewRecordComponent } from './new-record/new-record.component';
import { RecordsListComponent } from './records-list/records-list.component';
import { RecordCardComponent } from './record-card/record-card.component';
import { SharedModule } from './shared/shared.module';
import { NewWodComponent } from './new-wod/new-wod.component';



@NgModule({
  declarations: [
    CardAtletaComponent,
    BuzonSugerenciasComponent,
    EditarPerfilComponent,
    WodsListComponent,
    WodCardComponent,
    NewRecordComponent,
    RecordsListComponent,
    RecordCardComponent,
    NewWodComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
    SharedModule
  ],
  exports: [
    CardAtletaComponent,
    BuzonSugerenciasComponent,
    WodsListComponent,
    RecordsListComponent
  ]
})
export class ComponentsModule { }
