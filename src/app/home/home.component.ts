import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutCartService } from '../checkout-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchItemName = '';

  totalItemsCountInCart = this.cart.totalItemsCount;

  storeItemName(itemName: string) {
    this.searchItemName = itemName;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  constructor(private router: Router, private cart: CheckoutCartService) { }

  ngOnInit(): void {
  }

}
