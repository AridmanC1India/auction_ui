import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserLogin } from './login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService, private fb : FormBuilder) { }
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

  onSubmit(loginData : UserLogin){
    loginData = this.loginForm.value;
    console.log(loginData);
  }

}
