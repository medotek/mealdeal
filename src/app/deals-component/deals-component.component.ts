import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-deals-component',
  templateUrl: './deals-component.component.html',
  styleUrls: ['./deals-component.component.scss'],
})
export class DealsComponentComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() price: number;
  public img = '/assets/icon/favicon.png';

  constructor() { }

  ngOnInit() {}

}
