import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInModuleRoutingModule } from './sign-in-module-routing.module';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    SignInModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignInModuleModule { }
