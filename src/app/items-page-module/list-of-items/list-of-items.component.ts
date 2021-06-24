import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { itemDetailsList } from '../../../assets/all-items';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {

  filterByItemCategory = '';

  userName ='';

  listOfItems = JSON.parse(localStorage.getItem('listOfItems'));

  listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));

  noItems=false;

  constructor(private route:ActivatedRoute, private _location:Location, private router:Router) { }

  ngOnInit(): void {
    !this.listOfItems ? this.noItems=true : this.noItems=false; 
    this.route.params.subscribe((params) => {
      this.filterByItemCategory = params['category'];
    });
    this.userName = localStorage.getItem('currentUser');
    this.authenticateUser();
  }

  authenticateUser() {
    if (!this.userName) {
      this.router.navigate(['/error']);
    }
  }

  goToBackPage() {
    this._location.back();
  }
}
