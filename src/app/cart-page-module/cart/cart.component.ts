import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CheckoutCartService } from '../../checkout-cart.service';
import { Router } from '@angular/router';

interface itemInCart {
  id: string;
  name: string;
  price: number;
  count: number;
};

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allItemsOfCart: itemInCart[];
  userName ='';

  
  constructor(private cart: CheckoutCartService, private _location: Location, private router: Router) {
    this.getItemsFromCart();
  }

  ngOnInit(): void {
    this.userName = localStorage.getItem('currentUser');
    this.authenticateUser();
  }

  authenticateUser() {
    if (!this.userName) {
      this.router.navigate(['/error']);
    }
  }

  updateItemQty(item: itemInCart, action: string) {
    action === '+' ? this.cart.increaseItemCount(item) : this.cart.decreaseItemCount(item);
  }

  goToBackPage() {
    this._location.back();
  }

  getItemsFromCart() {
    this.cart.itemsArrayOfCart.subscribe(
      itemsArray => this.allItemsOfCart = itemsArray
    );
  }


}
