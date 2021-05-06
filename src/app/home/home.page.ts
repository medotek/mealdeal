import { DealPrototype } from './../class/deal-prototype';
import { Deal } from './../interfaces/deal';
import { DaoService } from './../services/dao.service';
import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { HomeService } from '../services/home.service';
import {HomeService} from '../services/home.service';
import {Welcome as API} from '../interfaces/welcome';
import {Product} from '../interfaces/product';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData: any;
  scannedBarCode: string;
  barcodeScannerOptions: BarcodeScannerOptions;
  public response: API;
  public monProduit: Product;
  public oui = false;

  constructor(private scanner: BarcodeScanner, private homeService: HomeService,
              private firebase: FirebaseX, private dao: DaoService) {

    this.encodedData = 'Programming isn\'t about what you know';

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.homeService.searchProduct('5410041040807').subscribe((data: API) => {
      this.response = data;
      // récupère uniquement le tableau product
      console.log(this.response.product);
    });
    if(false) {
      let deal: DealPrototype = new DealPrototype(
        "Un super deal",
        "3017620422003",
        5.00,
        new Date(),
        false,
        "JE_DOIS_INVENTER_UN_IDENTIFIANT_DE_MAGASIN",
        0,
        "Une super description qui est étrangement très générique",
        10.00,
        50,
        "UNE_URL_D'IMAGE_SUPER_BIEN_JE_CRIS_PAS_C'EST_POUR_BIEN_VOIR_D'ACCORD?"
      );

      this.dao.createDeal(deal);

      this.dao.getAllDeals().snapshotChanges().subscribe((data: API) => {
        console.log( this.response);
      })

  }

  ngOnInit() {
    // this.isUserLogged();
  }

  // isUserLogged() {
  //   this.firebase.isUserSignedIn().then(r => () => {
  //     console.log(r)
  //   });
  // }

  scanBRcode() {
    this.scanner.scan().then(res => {
      this.scannedBarCode = res.text;

      this.homeService.searchProduct(this.scannedBarCode).subscribe((data: API) => {
        this.response = data;
        this.monProduit = this.response.product;
        this.oui = true;
      });
      this.homeService.searchProduct(this.scannedBarCode).subscribe( res => {
        console.log(res);
      });
    });
  }

  generateBarCode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodedData).then(
      res => {
        alert(res);
        this.encodedData = res;
      }, error => {
        alert(error);
      }
    );
  }
}
