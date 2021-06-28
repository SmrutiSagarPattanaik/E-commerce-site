import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-categories',
  templateUrl: './list-of-categories.component.html',
  styleUrls: ['./list-of-categories.component.css']
})
export class ListOfCategoriesComponent implements OnInit {

  listOfCategories: string[];
  listOfItems: any;
  categoryToBeDeleted: string;
  noCategories = false;
  isEditPossible = false;
  showDeleteConfirmModal = false;
  showAddCategoryModal = false;

  @Input() filterByCategory = '';

  constructor() {
    this.updateCategoryListProperty();
    if (!this.listOfCategories) {
      this.listOfCategories = [];
    }
  }

  ngOnInit(): void {
    this.updateNoCategoriesMessage();
    let currentUser = localStorage.getItem('currentUser');
    let userDetails = JSON.parse(localStorage.getItem(currentUser));
    if (userDetails['role'] === 'seller') {
      this.isEditPossible = true;
    }
  }

  updateCategoryListProperty() {
    this.listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));
  }

  updateNoCategoriesMessage() {
    let listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));

    if (!listOfCategories) {
      this.updateCategoryListProperty();
      this.noCategories = true;
      return;
    }
    this.noCategories = false;
  }

  onDeleteButtonClick(category: string) {
    this.categoryToBeDeleted = category;
    this.showDeleteConfirmModal = !this.showDeleteConfirmModal;
  }

  onClickAddNewCategoryButton() {
    this.showAddCategoryModal = !this.showAddCategoryModal;
  }

  deleteFromListOfCategories() {
    let listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));

    for (let index = 0; index < listOfCategories.length; index++) {
      if (listOfCategories[index].toLowerCase()
        === this.categoryToBeDeleted.toLowerCase()) {
        listOfCategories.splice(index, 1);
        break;
      }
    }
    if (!listOfCategories.length) {
      localStorage.removeItem('listOfCategories');
      return;
    }
    localStorage.setItem('listOfCategories', JSON.stringify(listOfCategories));
  }

  deleteFromListOfItems() {
    let listOfItems = JSON.parse(localStorage.getItem('listOfItems'));

    if (listOfItems) {
      listOfItems = listOfItems.filter(
        element =>
          element['category'].toLowerCase() !== this.categoryToBeDeleted.toLowerCase());

      if (!listOfItems.length) {
        localStorage.removeItem('listOfItems');
        return;
      }
      localStorage.setItem('listOfItems', JSON.stringify(listOfItems));
    }
  }

  closeDeleteConfirmModal(confirmDelete: boolean) {
    if (confirmDelete) {
      this.showDeleteConfirmModal = !this.showDeleteConfirmModal;

      this.deleteFromListOfCategories();
      this.deleteFromListOfItems();
      this.updateNoCategoriesMessage();
      this.updateCategoryListProperty();

      return;
    }

    this.showDeleteConfirmModal = !this.showDeleteConfirmModal;
    this.categoryToBeDeleted = '';
  }

  closeAdditionModal(addCategory: any) {
    if (!addCategory) {
      this.showAddCategoryModal = !this.showAddCategoryModal;
      return;
    }
    let listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));
    if (listOfCategories) {
      listOfCategories.push(addCategory);
      localStorage.setItem('listOfCategories', JSON.stringify(listOfCategories));
      this.updateCategoryListProperty();
      this.showAddCategoryModal = !this.showAddCategoryModal;
      return;
    }
    listOfCategories = [];
    listOfCategories.push(addCategory);
    localStorage.setItem('listOfCategories', JSON.stringify(listOfCategories));
    this.updateCategoryListProperty();
    this.updateNoCategoriesMessage();
    this.showAddCategoryModal = !this.showAddCategoryModal;
  }

}
