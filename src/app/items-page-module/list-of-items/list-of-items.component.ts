import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {

  filterByItemCategory = '';
  userName = '';
  itemIdToBeDeleted = '';
  listOfItems: any;
  noItems = false;
  isEditPossible = false;
  showAddItemModal = false;
  showDeleteConfirmModal = false;

  constructor(private route: ActivatedRoute, private _location: Location, private router: Router) { 
    this.listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.filterByItemCategory = params['category'];
    });

    !this.listOfItems || !this.doesThisCategoryExist() ?
      this.noItems = true : this.noItems = false;

    this.userName = localStorage.getItem('currentUser');
    this.authenticateUser();

    let userDetails = JSON.parse(localStorage.getItem(this.userName));
    if (userDetails['role'] === 'seller') {
      this.isEditPossible = true;
    }
  }

  authenticateUser() {
    if (!this.userName) {
      this.router.navigate(['/error']);
    }
  }

  doesThisCategoryExist() {
    for (let index = 0; index < this.listOfItems.length; index++) {
      if(this.listOfItems[index]['category'].toLowerCase()===this.filterByItemCategory.toLowerCase()) {
        return true;
      }
    }
    return false;
  }

  goToBackPage() {
    this._location.back();
  }

  onClickAddNewItemButton() {
    this.showAddItemModal = !this.showAddItemModal;
  }

  closeAdditionModal(addItem:boolean) {
    if(!addItem) {
      this.showAddItemModal = !this.showAddItemModal;
      return;
    }
    let listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
    if(listOfItems) {
      addItem['category'] = this.filterByItemCategory;
      listOfItems.push(addItem);
      localStorage.setItem('listOfItems',JSON.stringify(listOfItems));
      this.listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
      this.showAddItemModal = !this.showAddItemModal;
      return;
    }
    listOfItems = [];
    addItem['category'] = this.filterByItemCategory;
    listOfItems.push(addItem);
    localStorage.setItem('listOfItems',JSON.stringify(listOfItems));
    this.listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
    this.noItems=false;
    this.showAddItemModal = !this.showAddItemModal;
  }

  onDeleteButtonClick(itemId: string) {
    this.itemIdToBeDeleted = itemId;
    this.showDeleteConfirmModal = !this.showDeleteConfirmModal;
  }

  deleteFromListOfItems() {
    for(let index=0; index<this.listOfItems.length;index++) {
      if (this.listOfItems[index]['id'].toLowerCase()===
      this.itemIdToBeDeleted.toLowerCase()) {
        this.listOfItems.splice(index,1);
        break;
      }
    }
  }

  closeDeleteConfirmModal(confirmDelete: boolean) {
    if (confirmDelete) { 
      this.showDeleteConfirmModal = !this.showDeleteConfirmModal;
      this.deleteFromListOfItems();
      if(!this.listOfItems.length) {
        localStorage.removeItem('listOfItems');
        this.noItems = true;
        return;
      }
      this.noItems=false;
      localStorage.setItem('listOfItems',JSON.stringify(this.listOfItems));
      this.listOfItems=JSON.parse(localStorage.getItem('listOfItems'));
      return;
    }
    this.showDeleteConfirmModal = !this.showDeleteConfirmModal;
    this.itemIdToBeDeleted = '';
  }
}
