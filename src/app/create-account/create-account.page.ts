import { Component, OnInit } from '@angular/core';
import {FirebaseX} from '@ionic-native/firebase-x/ngx';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  erreurPassword = false;
  erreurMail = false;

  constructor(
    private router: Router,
    private firebase: FirebaseX,
    private platform: Platform) { }

  ngOnInit() {
  }

  createAccount(name, firstname, email, password, confirmPassword) {
    if (password.value === confirmPassword.value) {
      this.erreurPassword = false;
      this.platform.ready().then(r =>
        this.firebase.createUserWithEmailAndPassword(email.value, password.value).then(res => {
          this.erreurMail = false;
              this.router.navigate(['/home']);
          //execute db queries
        }, () => {
          this.erreurMail = true;
          alert('L\'adresse mail est déjà utilisé !');
        }));
    } else {
      this.erreurPassword = true;
      alert('Les mots de passes ne sont pas identiques !');
    }
  }

  emailIsVerified(email, password) {
    this.platform.ready().then(r =>
      this.firebase.signInUserWithEmailAndPassword(email.value, password.value).then(() => {
        this.firebase.getCurrentUser().then(res => {
          console.log(res);
          this.firebase.signOutUser();
        });
        }
      )
    );
  }

}
