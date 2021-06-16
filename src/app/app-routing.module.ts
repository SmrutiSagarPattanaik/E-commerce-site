import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: ":id",
    component: ItemDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
