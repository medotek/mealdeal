import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateDealsPageRoutingModule } from './create-deals-routing.module';

import { CreateDealsPage } from './create-deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateDealsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateDealsPage]
})
export class CreateDealsPageModule {}
