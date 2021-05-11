import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeService} from '../services/home.service';
import {DealService} from '../entity/deal.service';
import {UserService} from '../entity/user.service';

@Component({
  selector: 'app-deal-information',
  templateUrl: './deal-information.page.html',
  styleUrls: ['./deal-information.page.scss'],
})
export class DealInformationPage implements OnInit {

  page;
  produit;
  productDeal;
  auteur;

  constructor(private route: ActivatedRoute, private homeService: HomeService, private dealService: DealService, private router: Router,
              private user: UserService) {
    this.route.params.subscribe( params => {
      if (params.id) {
        this.homeService.searchProduct(params.id).subscribe(res => {
          console.log(res['product']);
          this.produit = res['product'];
        }, () => {console.log('not found');});
      }

      if (params.idDeal) {
        this.dealService.getDeal(params.idDeal).subscribe(r => {
          this.user.getUserInfos(r['author']).subscribe(res =>{
            this.auteur = res.nickname;
          });
          this.productDeal = r;
        });
      }
      this.page = params.page;
    });
  }

  ngOnInit() {
  }

  returnDeals() {
    this.router.navigate(['/deals']);
  }

}
