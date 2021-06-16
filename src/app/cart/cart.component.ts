import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CheckoutCartService } from '../checkout-cart.service';

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

  increaseQty(item: [string, string, number, number]) {
    let itemObj = {
      id: item[0],
      name: item[1],
      price: item[2],
      count: item[3]
    }
    this.cart.increaseItemCount(itemObj);
  }

  decreaseQty(item: [string, string, number, number]) {
    let itemObj = {
      id: item[0],
      name: item[1],
      price: item[2],
      count: item[3]
    }
    this.cart.decreaseItemCount(itemObj);
  }

  goToBackPage() {
    this._location.back();
  }

  getItemsFromCart() {
    this.cart.itemsArrayOfCart.subscribe(
      itemsArray => this.allItemsOfCart = itemsArray
    );
  }

  constructor(private cart: CheckoutCartService, private _location: Location) {
    this.getItemsFromCart();
  }

  ngOnInit(): void {
  }

}
