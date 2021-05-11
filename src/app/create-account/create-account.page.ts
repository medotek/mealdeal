import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  differentPassword = false;

  constructor(
    private auth: AuthenticationService) { }

  ngOnInit() {
  }

  createAccount(name, firstname, email, password, confirmPassword) {
    if (password.value === confirmPassword.value) {
      this.differentPassword = false;

      this.auth.createAccount(email.value, password.value);
      if(this.auth.getErrorCode())
        alert(this.auth.getErrorMessage());
    } else {
      this.differentPassword = true;
      alert('Les mots de passes ne sont pas identiques !');
    }
  }

}
