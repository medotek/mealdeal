import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Product} from '../interfaces/product';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent implements OnInit {
  @Input() produit: Product;
  @Input() nom: string;
  @Input() marque: string;
  @Input() image: string;
  monImage;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  addDeal(){
    if (this.produit.image_front_url === undefined){
      this.router.navigate(['create-deals', {produitId: this.produit.id}]);
    }else{
      this.router.navigate(['create-deals', {produitId: this.produit.id, produitImage: this.produit.image_front_url}]);
    }
  }

}
