import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserRegistration } from './register.model';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registrationForm : FormGroup;
  constructor(private fb: FormBuilder) { }

  get firstName(){
    return this.registrationForm.get('firstName');
  }
  get lastName(){
    return this.registrationForm.get('lastName');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get confirmPassword(){
    return this.registrationForm.get('confirmPassword');
  }
  get mobileNo(){
    return this.registrationForm.get('mobileNo');
  }

  ngOnInit() {
    this.setUserRegistration();
  }

  setUserRegistration(){
    this.registrationForm = this.fb.group({
      firstName : ['', [Validators.required, Validators.minLength(4)]],
      lastName : ['', [Validators.required, Validators.minLength(4)]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required, Validators.minLength(6), Validators.pattern]],
      confirmPassword : ['', Validators.required],
      mobileNo : ['', [Validators.required, Validators.pattern]]
    },{
      validator: CustomValidators.passwordMatchValidator
    })
  }

  onSubmit(registrationData : UserRegistration){
    registrationData = this.registrationForm.value;
    console.log(registrationData);
  }

}
