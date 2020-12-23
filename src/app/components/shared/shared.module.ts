import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CreateRmWodComponent } from './create-rm-wod/create-rm-wod.component';
import { OpcionesComponent } from './opciones/opciones.component';



@NgModule({
  declarations: [
    CreateRmWodComponent,
    OpcionesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    CreateRmWodComponent,
    OpcionesComponent
  ]
})
export class SharedModule { }
