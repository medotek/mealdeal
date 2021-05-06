import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private authentication: AuthenticationService) {
  }

  ngOnInit() {
  }

  signUp(email, password){
    this.authentication.logUserIn(email.value, password.value);
  }

  changePassword() {
    this.router.navigate(['/forgot-password']);
  }

  createAccount() {
    this.router.navigate(['/create-account']);
  }
}
