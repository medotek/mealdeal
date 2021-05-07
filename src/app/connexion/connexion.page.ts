import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  public isUserLoggedIn: string;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authentication: AuthenticationService,
              private firebase: FirebaseX,
              private platform: Platform) {
  }

  ngOnInit() {
  }

  signUp(email, password){
    this.platform.ready().then(r =>
      this.firebase.signInUserWithEmailAndPassword(email.value, password.value).then(res => {
        this.router.navigate(['/home']);
        }, () => {
          alert('Votre identifient ou mot de passe est incorrect !');
        }
      )
    );
  }

  changePassword() {
    this.router.navigate(['/forgot-password']);
  }

  createAccount() {
    this.router.navigate(['/create-account']);
  }
}
