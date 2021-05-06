import {Component} from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
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
              private firebase: FirebaseX) {

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


  }

  ngOnInit() {
    this.isUserLogged();
  }

  isUserLogged() {
    this.firebase.isUserSignedIn().then(r => () => {
      console.log(r)
    });
  }

  scanBRcode() {
    this.scanner.scan().then(res => {
      this.scannedBarCode = res.text;

      this.homeService.searchProduct(this.scannedBarCode).subscribe((data: API) => {
        this.response = data;
        this.monProduit = this.response.product;
        this.oui = true;
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
