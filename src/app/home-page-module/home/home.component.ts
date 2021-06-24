import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CheckoutCartService } from '../../checkout-cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchItemCategory = '';

  userName = '';

  totalItemsCountInCart = this.cart.totalItemsCount;

  constructor(private router: Router, private cart: CheckoutCartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('currentUser');
    this.authenticateUser();
  }

  authenticateUser() {
    if (!this.userName) {
      this.router.navigate(['/error']);
    }
  }


  onClickSignOutLink() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('');
  }


  storeItemCategory(itemCategory: string) {
    this.searchItemCategory = itemCategory;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }



}
