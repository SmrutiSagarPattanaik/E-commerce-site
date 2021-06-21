import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pathToFileURL } from 'url';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

const routes: Routes = [
{
  path:"",
  component: SignInFormComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignInModuleRoutingModule { }
