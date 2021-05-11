import { FirebaseX } from '@ionic-native/firebase-x/ngx';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteDealsPageRoutingModule } from './compte-deals-routing.module';

import { CompteDealsPage } from './compte-deals.page';
import { DealsComponentComponent } from '../deals-component/deals-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteDealsPageRoutingModule
  ],
  declarations: [
    CompteDealsPage,
    DealsComponentComponent
  ],
  exports: [
    DealsComponentComponent
  ]
})
export class CompteDealsPageModule {}
