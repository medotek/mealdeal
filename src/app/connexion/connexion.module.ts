import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionPageRoutingModule } from './connexion-routing.module';

import { ConnexionPage } from './connexion.page';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule
  ],
  providers: [
    FirebaseX,
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
