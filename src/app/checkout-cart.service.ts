import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface itemInCart {
  id: string;
  name: string;
  price: number;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class CheckoutCartService {

  itemsArrayOfCart: BehaviorSubject<itemInCart[]>;

  allItemsCountInCart: BehaviorSubject<number>;

  allItemsInCart: itemInCart[];

  totalItemsCount: number;

  isItemInCart(itemObj: itemInCart): boolean {
    let arrayLength = this.allItemsInCart.length;
    for (let index = 0; index < arrayLength; index++) {
      if (itemObj.id === this.allItemsInCart[index].id) {
        return true;
      }
    }
    return false;
  }

  increaseItemCount(itemObj: itemInCart) {
    let arrayLength = this.allItemsInCart.length;
    for (let index = 0; index < arrayLength; index++) {
      if (itemObj.id === this.allItemsInCart[index].id) {
        this.allItemsInCart[index].count += 1;
        break;
      }
    }
    this.totalItemsCount += 1;
    this.allItemsCountInCart.next(this.totalItemsCount);
    this.itemsArrayOfCart.next(this.allItemsInCart);
  }

  decreaseItemCount(itemObj: itemInCart) {
    let arrayLength = this.allItemsInCart.length;
    for (let index = 0; index < arrayLength; index++) {
      if (itemObj.id === this.allItemsInCart[index].id) {
        this.allItemsInCart[index].count -= 1;
        if (!this.allItemsInCart[index].count) {
          this.allItemsInCart.splice(index, 1);
        }
        break;
      }
    }
    this.totalItemsCount -= 1;
    this.allItemsCountInCart.next(this.totalItemsCount);
    if (!this.totalItemsCount) {
      this.itemsArrayOfCart.next(null);
    } else {
      this.itemsArrayOfCart.next(this.allItemsInCart);
    }
  }

  addItemToCart(itemObj: itemInCart) {
    if (this.allItemsInCart.length !== 0 && this.allItemsInCart[0]['price'] === 0) {
      this.allItemsInCart.shift();
    }

    if (this.isItemInCart(itemObj)) {
      this.increaseItemCount(itemObj);
    } else {
      this.allItemsInCart.push(itemObj);
      this.totalItemsCount += 1;
      this.allItemsCountInCart.next(this.totalItemsCount);
      this.itemsArrayOfCart.next(this.allItemsInCart);
    }
  }

  constructor() {
    this.itemsArrayOfCart = new BehaviorSubject(null);

    this.allItemsCountInCart = new BehaviorSubject(0);

    this.totalItemsCount = 0;

    this.allItemsInCart = [{ id: '', name: '', price: 0, count: 0 }];

  }
}
