import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InfoProduitToDealPageRoutingModule } from './info-produit-to-deal-routing.module';
import { InfoProduitToDealPage } from './info-produit-to-deal.page';
import { ProductsComponentComponent } from '../products-component/products-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoProduitToDealPageRoutingModule
  ],
  declarations: [InfoProduitToDealPage,
    ProductsComponentComponent],
  exports: [ProductsComponentComponent],
})
export class InfoProduitToDealPageModule {}
