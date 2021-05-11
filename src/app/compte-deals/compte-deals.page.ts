import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compte-deals',
  templateUrl: './compte-deals.page.html',
  styleUrls: ['./compte-deals.page.scss'],
})
export class CompteDealsPage implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit() {
  }

  addDeals(){
    this.router.navigate(['info-produit-to-deal']);
  }

}
