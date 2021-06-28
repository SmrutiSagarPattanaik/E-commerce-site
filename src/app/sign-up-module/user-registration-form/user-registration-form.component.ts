import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { PassConfirmPassMatch } from '../customValidators/pass-confirm-pass-match';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  userExist: boolean;

  userRegisterForm = this.formBuilder.group({
    userName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern(/^[A-Za-z\S]+$/)
      ]],

    email: ['',
      [
        Validators.required,
        Validators.email
      ]],

    password: ['',
      [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/)
      ]],

    confirmPassword: ['',
      [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/),
      ]],

    birthdate: ['',
      [
        Validators.required,
        Validators.pattern(/^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-((19|20)\d{2})$/g)
      ]],

    mobile: ['',
      [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern(/^([0-9]){10}$/)
      ]],
    
    role: ['', Validators.required],

    addresses: this.formBuilder.array([
      this.addAddressFormGroup()
    ])

  }, { validators: this.passMatch.validate });

  constructor(private formBuilder: FormBuilder, private passMatch: PassConfirmPassMatch, private router: Router) { }

  ngOnInit(): void {
    this.userExist=false;
  }

  get addresses() {
    return this.userRegisterForm.get('addresses') as FormArray;
  }

  onFormSubmission() {
    console.log('The user has successfully registered');
    let userName = this.userRegisterForm.get('userName').value;
    let password = window.btoa(this.userRegisterForm.get('password').value);
    let role = this.userRegisterForm.get('role').value;

    let userDetails: {user:string, pass:string, role:string};

    if(!localStorage.getItem(`${userName}`)) {
      userDetails = {
        user: userName,
        pass: password,
        role
      }
      localStorage.setItem(userName,JSON.stringify(userDetails));
      this.router.navigate(['/signIn']);
    } else {
      this.userExist = true;
    }
  }

  addAddressFormGroup(): FormGroup {
    return this.formBuilder.group({
      street: ['', 
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z0-9\s]+$/) 
      ]
    ],
      city: ['', 
      [
        Validators.required,
        Validators.pattern(/^[A-Za-z\s]+$/) 
      ]
    ]
    })
  }

  onClickSignInButton() {
    this.router.navigateByUrl('/signIn');
  }

  onClickingResetButton() {
    this.userRegisterForm.reset();
  }

  removeAddress(index:number) {
    if(index!=0) {
      this.addresses.removeAt(index);
    } 
  }

  addAddress() {
    this.addresses.push(this.addAddressFormGroup());
  }

  errorFieldStreetName(index:number) {
    return this.addresses.controls[index]['controls']['street'].errors && 
    this.addresses.controls[index]['controls']['street'].touched
  }

  errorFieldCityName(index:number) {
    return this.addresses.controls[index]['controls']['city'].errors && 
    this.addresses.controls[index]['controls']['city'].touched
  }

  isErrorStreetName(index:number) {
    return this.addresses.controls[index]['controls']['street'].errors;
  }

  isErrorCityName(index:number) {
    return this.addresses.controls[index]['controls']['city'].errors;
  }

  showRequiredErrorStreet(index:number) {
    return this.addresses.controls[index]['controls']['street'].errors.required && 
    this.addresses.controls[index]['controls']['street'].touched;
  }

  showPatternErrorStreet(index:number) {
    return this.addresses.controls[index]['controls']['street'].errors.pattern && 
    this.addresses.controls[index]['controls']['street'].touched;
  }

  showRequiredErrorCity(index:number) {
    return this.addresses.controls[index]['controls']['city'].errors.required && 
    this.addresses.controls[index]['controls']['city'].touched;
  }

  showPatternErrorCity(index:number) {
    return this.addresses.controls[index]['controls']['city'].errors.pattern && 
    this.addresses.controls[index]['controls']['city'].touched;
  }
}
