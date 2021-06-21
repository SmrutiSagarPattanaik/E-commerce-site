import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageModuleModule } from './cart-page-module/cart-page-module.module';
import { HomePageModuleModule } from './home-page-module/home-page-module.module';
import { ItemDetailsPageModuleModule } from './item-details-page-module/item-details-page-module.module';

const routes: Routes = [
  {
    path: "signIn",
    loadChildren: ()=>
    import('../app/sign-in-module/sign-in-module.module').
    then((m)=>m.SignInModuleModule)
  },
  {
    path: "signUp",
    loadChildren: ()=>
    import('../app/sign-up-module/sign-up-module.module').
    then((m)=>m.SignUpModuleModule)
  },
  {
    path: "home/:username",
    loadChildren: ()=>
    import('../app/home-page-module/home-page-module.module').
    then((m)=>HomePageModuleModule)
  },
  {
    path: 'cart',
    loadChildren: ()=>
    import('../app/cart-page-module/cart-page-module.module').
    then((m)=>CartPageModuleModule)
  },
  {
    path: "home/:username/:id",
    loadChildren: ()=>
    import('../app/item-details-page-module/item-details-page-module.module').
    then((m)=>ItemDetailsPageModuleModule)
  },
  {
    path:"error",
    loadChildren: ()=>
    import('../app/error-module/error-module.module').
    then((m)=>m.ErrorModuleModule)
  },
  {
    path:"",
    redirectTo: "signIn",
    pathMatch:"full"
  },
  {
    path:"**",
    loadChildren: ()=>
    import('../app/error-module/error-module.module').
    then((m)=>m.ErrorModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
