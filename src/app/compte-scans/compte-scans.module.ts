import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteScansPageRoutingModule } from './compte-scans-routing.module';

import { CompteScansPage } from './compte-scans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteScansPageRoutingModule
  ],
  declarations: [CompteScansPage]
})
export class CompteScansPageModule {}
