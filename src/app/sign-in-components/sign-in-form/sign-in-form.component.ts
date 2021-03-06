import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  signInForm = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })

  UserExist: boolean;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.UserExist = true;
  }

  goToRegisterPage() {
    this.router.navigate(['/signUp']);
  }

  signIn() {
    let userDetails = JSON.parse(localStorage.getItem(this.signInForm.get('userName').value));
    let enteredPassWord = this.signInForm.get('password').value;
    let dataBasePassword = '';

    if (!userDetails) {
      this.UserExist = false;
    } else {
      dataBasePassword = userDetails['pass'];
      if (dataBasePassword === enteredPassWord) {
        userDetails['isSignedIn'] = true;
        localStorage.setItem(userDetails['user'],JSON.stringify(userDetails));
        this.router.navigate(['./home', `${userDetails['user']}`]);
      } else {
        this.UserExist = false;
      }
    }
  }
}
