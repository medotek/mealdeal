import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateAccountPageRoutingModule } from './create-account-routing.module';

import { CreateAccountPage } from './create-account.page';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateAccountPageRoutingModule
  ],
  providers: [
    FirebaseX,
  ],
  declarations: [CreateAccountPage]
})
export class CreateAccountPageModule {}
