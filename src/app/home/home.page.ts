import { Component } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { HomeService } from '../services/home.service';
import {Welcome as API} from "../interfaces/welcome";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  public response: API;
  constructor(private scanner: BarcodeScanner, private homeService: HomeService) {

    this.encodedData = 'Programming isn\'t about what you know';

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };

    this.homeService.searchProduct('737628064502').subscribe( (data: API)  => {
      this.response = data ;
  // récupère uniquement le tableau product
      console.log(this.response.product);
    });

  }

  scanBRcode() {
    this.scanner.scan().then(res => {
        this.scannedBarCode = res;
      }).catch(err => {
        alert(err);
      });
      this.homeService.searchProduct(this.scannedBarCode).subscribe( res => {
        console.log(res);
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
