import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

}
