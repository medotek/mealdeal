import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FirebaseX} from "@ionic-native/firebase-x/ngx";
import {NavController, Platform} from "@ionic/angular";

@Component({
  selector: 'app-compte-infos',
  templateUrl: './compte-infos.page.html',
  styleUrls: ['./compte-infos.page.scss'],
})
export class CompteInfosPage implements OnInit {
  public isUserLoggedIn = false;
  constructor(private auth: AuthenticationService,
              private route: ActivatedRoute,
              private authentication: AuthenticationService,
              private firebase: FirebaseX,
              private platform: Platform,
              private router: Router) { }

  ngOnInit() {
    this.platform.ready().then(() => {
      this.authentication.isUserLogged().then((r) => {
        if(!r) {
          this.isUserLoggedIn = r;
          this.router.navigate(['connexion']);
        } else {
          this.isUserLoggedIn = r;
        }
      }).catch(error =>   this.isUserLoggedIn = false)
    })


  }

  logout() {
    this.auth.logout();
    this.router.navigate(['connexion']);
  }
}
