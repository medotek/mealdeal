import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deals-component',
  templateUrl: './deals-component.component.html',
  styleUrls: ['./deals-component.component.scss'],
})
export class DealsComponentComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() description: string;
  @Input() lien: string;
  @Input() price: number;
  @Input() oldPrice: number;
  @Input() salePercent: number;
  @Input() vote: number;
  @Input() dateCreation: Date;
  @Input() expired: boolean;
  @Input() id: string;
  @Input() idDeal: number;
  public img = '/assets/icon/favicon.png';

  constructor(private router: Router) { }

  ngOnInit() {}

  moreInformations() {
    this.router.navigate(['deal-information', {page: 'deals', idDeal: this.idDeal, id: this.id}]);
  }

}
