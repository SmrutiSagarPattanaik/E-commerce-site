import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { SignInFormComponent } from './sign-in-components/sign-in-form/sign-in-form.component';
import { UserRegistrationFormComponent } from './sign-up-components/user-registration-form/user-registration-form.component';

const routes: Routes = [
  {
    path: "",
    component: SignInFormComponent
  },
  {
    path: "signUp",
    component: UserRegistrationFormComponent
  },
  {
    path: "home/:username",
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: "home/:username/:id",
    component: ItemDetailsComponent
  },
  {
    path:"error",
    component: ErrorPageComponent
  },
  {
    path:"**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
