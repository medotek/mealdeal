import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Platform} from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  public isUserLoggedIn: string;
  public message: string = null;

  constructor(private router: Router,
              private auth: AuthenticationService
  ) {
  }

  ngOnInit() {
  }

  signUp(email, password){
    this.auth.login(email.value, password.value)
      .then(() => {
        this.router.navigate(['/deals']);
        this.message = null;
      }).catch((error) => {
        this.message = error.message;
      });
  }

  changePassword() {
    this.router.navigate(['/forgot-password']);
  }

  createAccount() {
    this.router.navigate(['/create-account']);
  }
}
