import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { itemDetailsList } from '../../assets/all-items';
import { CheckoutCartService } from '../checkout-cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  private sub: any;
  selectedItemId = '';
  username='';
  listOfItems = itemDetailsList;
  totalItemsCountInCart: number;

  constructor(private router: Router, private route: ActivatedRoute, private _location: Location, private cart: CheckoutCartService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.selectedItemId = params['id'];
      this.username = params['username'];
    });
    this.cart.allItemsCountInCart.subscribe(count => this.totalItemsCountInCart = count);
    this.authenticateUser();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  authenticateUser() {
    let userDetails = JSON.parse(localStorage.getItem(this.username));
    if (!userDetails || !userDetails['isSignedIn']) {
      this.router.navigate(['/error']);
    }
  }


  goToBackPage() {
    this._location.back();
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  sendItemToCart(cartItem: [string, string, number, number]) {
    let itemObj = {
      id: cartItem[0],
      name: cartItem[1],
      price: cartItem[2],
      count: cartItem[3]
    }
    this.cart.addItemToCart(itemObj);
  }



}
