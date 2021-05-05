import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsAlternatifsPageRoutingModule } from './produits-alternatifs-routing.module';

import { ProduitsAlternatifsPage } from './produits-alternatifs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsAlternatifsPageRoutingModule
  ],
  declarations: [ProduitsAlternatifsPage]
})
export class ProduitsAlternatifsPageModule {}
