import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-category-page',
  templateUrl: './add-new-category-page.component.html',
  styleUrls: ['./add-new-category-page.component.css']
})
export class AddNewCategoryPageComponent implements OnInit {

  enableItemAdd = false;
  categoryCreated = false;
  itemCategory = '';
  itemDescription = '';
  itemImageUrl = '';
  itemName = '';
  itemPrice = 0;
  listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
  listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));

  categoryForm = this.formBuilder.group({
    category: ['', Validators.required]
  })

  itemForm = this.formBuilder.group({
    description: ['', Validators.required],
    id: ['', Validators.required],
    imageUrl: ['', Validators.required],
    name: ['', Validators.required],
    price: [null, Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onAdd1Item() {
    this.itemCategory = this.categoryForm.get('category').value.toLowerCase();

    if (this.listOfCategories) {
      for (let index = 0; index < this.listOfCategories.length; index++) {
        if (this.listOfCategories[index].toLowerCase() === this.itemCategory.toLowerCase()) {
          this.enableItemAdd = false;
          return;
        }
      }
    }

    this.enableItemAdd = true;
  }

  onClickSave() {
    let itemObj = {
      category: this.itemCategory,
      description: this.itemForm.get('description').value,
      id: this.itemForm.get('id').value,
      imageUrl: this.itemForm.get('imageUrl').value,
      name: this.itemForm.get('name').value,
      price: this.itemForm.get('price').value
    }

    if (this.listOfCategories && this.listOfItems) {
      this.listOfCategories.push(itemObj['category']);
      this.listOfItems.push(itemObj);
    } else {
      this.listOfItems = [];
      this.listOfCategories = [];
      this.listOfCategories.push(itemObj['category']);
      this.listOfItems.push(itemObj);
    }

    localStorage.setItem('listOfCategories', JSON.stringify(this.listOfCategories));
    localStorage.setItem('listOfItems', JSON.stringify(this.listOfItems));

    this.categoryForm.reset();
    this.itemForm.reset();

    this.categoryCreated = true;
  }

  onClickCreateNewCategory() {
    this.enableItemAdd = false;
    this.categoryCreated = false;
  }

}
