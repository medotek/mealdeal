import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteDealsPageRoutingModule } from './compte-deals-routing.module';

import { CompteDealsPage } from './compte-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteDealsPageRoutingModule
  ],
  declarations: [CompteDealsPage]
})
export class CompteDealsPageModule {}
