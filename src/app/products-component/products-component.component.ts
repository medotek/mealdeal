import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.scss'],
})
export class ProductsComponentComponent implements OnInit {
  @Input() nom: string;
  @Input() marque: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
