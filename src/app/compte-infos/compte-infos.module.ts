import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompteInfosPageRoutingModule } from './compte-infos-routing.module';

import { CompteInfosPage } from './compte-infos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompteInfosPageRoutingModule
  ],
  declarations: [CompteInfosPage]
})
export class CompteInfosPageModule {}
