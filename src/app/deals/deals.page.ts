import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../services/home.service';
import {Deal} from '../interfaces/deal';
import {IonInfiniteScroll, Platform} from '@ionic/angular';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {DealService} from '../entity/deal.service';
import {Router} from '@angular/router';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public imageTmp = '/assets/icon/favicon.png';
  public isUserLoggedIn = false;
  private result: any[] = [];

  constructor(private homeService: HomeService,
              private platform: Platform,
              private firebase: FirebaseX,
              private dealService: DealService,
              private router: Router,) {
    this.platform.ready().then(() => {
      this.firebase.setLanguageCode('fr').then(r => console.log(r))
      this.platform.ready().then(() => {
        this.firebase.isUserSignedIn().then(() => {
          this.isUserLoggedIn = true
        }).catch(r => {
          console.log(r)
          this.isUserLoggedIn = false
        })
      })
      }
    );
  }

  ngOnInit() {
    this.getAllDeals(null);
  }

  getAllDeals(event) {
    this.platform.ready().then(() => {
      this.dealService.getDealList().subscribe((res) => {
        this.result = res;

        if (event)
          event.target.complete();
      }, error => {
        console.log(error);

        if (event)
          event.target.complete();
      })
    });
  }


  loadData(event) {
    setTimeout(() => {
      this.platform.ready().then(() => {
        this.dealService.getDealList().subscribe((res) => {
          console.log('Done');
          event.target.complete();
          // App logic to determine if all data is loaded
          // and disable the infinite scroll
          if (res.length == 200) {
            event.target.disabled = true;
          }
        }, (error) => {})
        })
    }, 1000);
  }



  addDeals() {
    this.platform.ready().then(() => {
     this.firebase.isUserSignedIn().then(() => {
       this.router.navigate(['info-produit-to-deal']);
     }).catch(r => {
       console.log(r)
       this.router.navigate(['connexion']);})
    })
    console.log(this.firebase.getCurrentUser());
  }

}
