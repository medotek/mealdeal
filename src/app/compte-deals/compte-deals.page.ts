import { Platform } from '@ionic/angular';
import { FirebaseUser } from '@ionic-native/firebase-x/ngx';
import { AuthenticationService } from './../services/authentication.service';
import { DealService } from './../entity/deal.service';
import { Deal } from './../entity/deal';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compte-deals',
  templateUrl: './compte-deals.page.html',
  styleUrls: ['./compte-deals.page.scss'],
})
export class CompteDealsPage implements OnInit {

  private uid: string;
  private deals: Deal[] = [];

  constructor(private router: Router,
              private platform: Platform,
              private dealService: DealService,
              private authService: AuthenticationService) {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.fetchCurrentUser();
    this.fetchDeals();
  }

  getDeals() {
    return this.deals;
  }

  fetchDeals() {
    this.platform.ready().then(() => {
      this.dealService.getDealbyAuthor(this.uid).subscribe((data) => {
        this.deals = data;
        console.log('Deals : '+this.deals);
      });
    });

  }

  fetchCurrentUser() {
    this.authService.getCurrentUser()
      .then((firebaseUser: FirebaseUser) => {
        this.uid = firebaseUser.uid;
        console.log('uid:'+this.uid);
      }).catch((error) => {
      alert(error);
    });
  }

  addDeals(){
    this.router.navigate(['info-produit-to-deal']);
  }

}
