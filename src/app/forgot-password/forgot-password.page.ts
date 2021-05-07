import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authentication: AuthenticationService,
    private firebase: FirebaseX,
    private platform: Platform
  ) {
  }

  ngOnInit() {
  }

  changePassword(mail) {
    this.platform.ready().then(r =>
      this.firebase.sendUserPasswordResetEmail(mail.value).then(() => {
        this.router.navigate(['/connexion']);
      })
    );
  }

}
