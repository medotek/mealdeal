import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoLocPageRoutingModule } from './geo-loc-routing.module';

import { GeoLocPage } from './geo-loc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoLocPageRoutingModule
  ],
  declarations: [GeoLocPage]
})
export class GeoLocPageModule {}
