import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {DealsPageRoutingModule} from './deals-routing.module';
import {DealsPage} from './deals.page';
import {DealsComponentComponent} from '../deals-component/deals-component.component';
import { FirebaseX } from '@ionic-native/firebase-x/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealsPageRoutingModule
  ],
  providers: [
    FirebaseX,
  ],
  declarations: [DealsPage,
    DealsComponentComponent
  ],
  exports: [DealsComponentComponent],
})
export class DealsPageModule {
}
