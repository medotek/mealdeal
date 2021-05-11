import {Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";
import {FirebaseX} from "@ionic-native/firebase-x/ngx";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  public isUserLoggedIn = false;

  constructor(
    private platform: Platform,
    private firebase: FirebaseX,
    private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.auth.isUserLogged().then((r) => {
        this.isUserLoggedIn = r;
      }).catch(() => this.isUserLoggedIn = false)
    })
  }

}
