import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DealInformationPageRoutingModule } from './deal-information-routing.module';

import { DealInformationPage } from './deal-information.page';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealInformationPageRoutingModule,
    NgbModule
  ],
  declarations: [DealInformationPage]
})
export class DealInformationPageModule {}
