import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';

import { ForgotPasswordPage } from './forgot-password.page';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgotPasswordPageRoutingModule
  ],
  providers: [
    FirebaseX,
  ],
  declarations: [ForgotPasswordPage]
})
export class ForgotPasswordPageModule {}
