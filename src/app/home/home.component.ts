import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutCartService } from '../checkout-cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchItemName = '';

  userName = '';

  totalItemsCountInCart = this.cart.totalItemsCount;

  constructor(private router: Router, private cart: CheckoutCartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userName = params['username'];
    });
    this.authenticateUser();
  }

  authenticateUser() {
    let userDetails = JSON.parse(localStorage.getItem(this.userName));
    if (!userDetails || !userDetails['isSignedIn']) {
      this.router.navigate(['/error']);
    }
  }


  onClickSignOutLink() {
    let userDetails = JSON.parse(localStorage.getItem(this.userName));
    userDetails['isSignedIn'] = false;
    localStorage.setItem(userDetails['user'], JSON.stringify(userDetails));
    this.router.navigateByUrl('');
  }


  storeItemName(itemName: string) {
    this.searchItemName = itemName;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }



}
