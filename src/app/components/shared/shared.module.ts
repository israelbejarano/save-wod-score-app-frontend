import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CreateRmWodComponent } from './create-rm-wod/create-rm-wod.component';
import { OpcionesComponent } from './opciones/opciones.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    CreateRmWodComponent,
    OpcionesComponent,
    LoginComponent,
    RegistroComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    TranslateModule,
  ],
  exports: [
    CreateRmWodComponent,
    OpcionesComponent,
    LoginComponent
  ]
})
export class SharedModule { }
