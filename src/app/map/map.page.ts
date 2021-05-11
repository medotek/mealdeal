import { Component, OnInit } from '@angular/core';
import {Platform} from "@ionic/angular";
import {FirebaseX} from "@ionic-native/firebase-x/ngx";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  public isUserLoggedIn = false;

  constructor(
    private platform: Platform,
    private firebase: FirebaseX
  ) {

    this.platform.ready().then(() => {
      this.firebase.isUserSignedIn().then(() => {
        this.isUserLoggedIn = true
      }).catch(r => {
        console.log(r)
        this.isUserLoggedIn = false
      })
    })
  }

  ngOnInit() {
  }

}
