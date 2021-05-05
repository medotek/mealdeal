import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoProduitsPageRoutingModule } from './info-produits-routing.module';

import { InfoProduitsPage } from './info-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoProduitsPageRoutingModule
  ],
  declarations: [InfoProduitsPage]
})
export class InfoProduitsPageModule {}
