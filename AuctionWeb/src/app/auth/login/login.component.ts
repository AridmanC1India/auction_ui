import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLogin } from './login.model';

import { OAuthService } from 'angular-oauth2-oidc';
import { OktaAuthWrapper } from 'src/app/shared/okta.auth.wrapper';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb : FormBuilder,private oauthService: OAuthService,
    private oktaAuthWrapper: OktaAuthWrapper) { }
  loginForm: FormGroup;

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  ngOnInit() {
    this.setLoginForm();
  }

  setLoginForm(){
    this.loginForm = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password : ['', [
        Validators.required, 
        Validators.minLength(6),
        Validators.pattern
      ]],
      rememberMe : [false]
    })
  }



  onSubmit(loginData : UserLogin) {
  loginData = this.loginForm.value;
  console.log(loginData);
  this.oktaAuthWrapper.login(loginData.email, loginData.password)
    .then(_ => console.debug('logged in'))
    .catch(err => console.error('error logging in', err));
}

}
