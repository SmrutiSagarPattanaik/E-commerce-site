import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CheckoutCartService } from '../../checkout-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  selectedItemId = '';
  userName = '';
  listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
  totalItemsCountInCart: number;
  noItems = false;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private cart: CheckoutCartService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      this.selectedItemId = params['id'];
    });

    !this.listOfItems || !this.doesIdExist() ?
      this.noItems = true : this.noItems = false;

    this.cart.allItemsCountInCart.subscribe(count => this.totalItemsCountInCart = count);
    this.userName = localStorage.getItem('currentUser');
    this.authenticateUser();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  doesIdExist() {
    console.log(this.selectedItemId);
    for (let index = 0; index < this.listOfItems.length; index++) {
      if (this.listOfItems[index]['id'].toLowerCase() === this.selectedItemId.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  authenticateUser() {
    if (!this.userName) {
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
