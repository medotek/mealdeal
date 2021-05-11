import { DealService } from './../entity/deal.service';
import {DealPrototype} from './../class/deal-prototype';
import {Deal} from './../interfaces/deal';
import {DaoService} from './../services/dao.service';
import {Component} from '@angular/core';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner/ngx';
import {HomeService} from '../services/home.service';
import {Welcome as API} from '../interfaces/welcome';
import {Product} from '../interfaces/product';
import {FirebaseX} from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import {HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';


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

  //state
  public oui = false;
  public isUserLoggedIn: boolean = false;

  Deals: any = [];

  constructor(private platform: Platform,
              private scanner: BarcodeScanner, 
              private homeService: HomeService,
              private firebase: FirebaseX,
              private dealService: DealService,
              private http: HTTP) {

    this.encodedData = 'Programming isn\'t about what you know';

    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
    
    platform.ready().then(() => {
      this.firebase.setLanguageCode('fr').then(r => console.log(r))
    }).then();

    this.homeService.searchProduct('5410041040807').subscribe((data: API) => {
      this.response = data;
      // récupère uniquement le tableau product
      console.log(this.response.product);

    })
  }

  ngOnInit() {
    this.isUserLogged();
  }

  createAccount() {
    this.platform.ready().then(() =>
        this.firebase.createUserWithEmailAndPassword('test@test.fr', 'testtest').then(r =>
          console.log(r)
          //execute db queries
        )
      // FirebasePlugin.authenticateUserWithEmailAndPassword(email, password, function(credential) {
      //   console.log("Successfully authenticated with email/password");
      //   FirebasePlugin.reauthenticateWithCredential(credential, function() {
      //     console.log("Successfully re-authenticated");
      //   }, function(error) {
      //     console.error("Failed to re-authenticate", error);
      //   });
      //   // User is now signed in
      // }, function(error) {
      //   console.error("Failed to authenticate with email/password", error);
      // });
    );
  }

  getAllDeals() {
    this.platform.ready().then(() => {
      this.dealService.getDealList().subscribe((res) => {
        console.log(res);
        this.Deals = res;
      });
    });
  }

  authenticateWithEmail() {
    this.platform.ready().then(r =>
      this.firebase.signInUserWithEmailAndPassword('test@test.fr', 'testtest').then(() => {
          this.isUserLogged();
          console.log(this.isUserLoggedIn);
        }
      )
    );
  }

  logout() {
    this.platform.ready().then(() =>
      this.firebase.signOutUser().then(r => {
        if (r) {
          console.log('logged out ' + r);
        } else {
          console.log('not logged out' + r);
        }
      })
    );

    this.isUserLogged();
    console.log(this.isUserLoggedIn);
  }

  isUserLogged() {
    this.platform.ready().then(() => {
      this.firebase.isUserSignedIn().then(r => {
        if (r) {
          this.isUserLoggedIn = true;
        } else {
          this.isUserLoggedIn = false;
        }
      })
    })
  
  }

  scanBRcode() {
    this.scanner.scan().then(res => {
      this.scannedBarCode = res.text;

      this.homeService.searchProduct(this.scannedBarCode).subscribe((data: API) => {
        this.response = data;
        this.monProduit = this.response.product;
        this.oui = true;
      });
      this.homeService.searchProduct(this.scannedBarCode).subscribe(res => {
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
