import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createAccount(name, firstname, email, password, confirmPassword) {
    console.log(name.value + ', ' + firstname.value + ', ' + email.value + ', ' + password.value + ', ' + confirmPassword.value );
    if (password.value === confirmPassword.value) {
      console.log('LES MOTS DE PASSES SONT IDENTIQUES');
    } else {
      console.log('LES MOTS DE PASSES NE SONT PAS IDENTIQUES');
      alert('LES MOTS DE PASSES NE SONT PAS IDENTIQUES');
    }
  }

}
