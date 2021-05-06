import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }

  changePassword(mail) {
    /*this.authentication.changePassword(mail.value).then(() => {
      this.router.navigate(['/form-inscription']);
    }).catch(error => {
      alert(error);
    });*/
  }

}
