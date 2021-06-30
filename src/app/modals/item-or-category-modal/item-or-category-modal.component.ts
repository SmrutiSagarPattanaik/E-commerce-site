import { Component, OnInit, Input, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface itemObj {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

@Component({
  selector: 'app-item-or-category-modal',
  templateUrl: './item-or-category-modal.component.html',
  styleUrls: ['./item-or-category-modal.component.css']
})
export class ItemOrCategoryModalComponent implements OnInit {

  @Input() addNew = '';
  @Output() closeModal = new EventEmitter<any>();
  uploadedImageUrl: string;
  enableCategoryAdd = true;
  enableItemAdd = true;
  itemCategory = '';
  itemObj: itemObj;
  listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));
  listOfItems = JSON.parse(localStorage.getItem('listOfItems'));

  categoryForm = this.formBuilder.group({
    category: ['', Validators.required]
  })

  itemForm = this.formBuilder.group({
    description: ['', Validators.required],
    file: ['', Validators.required],
    name: ['', Validators.required],
    price: [null, Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private element: ElementRef) { }

  ngOnInit(): void {
  }

  onCloseClick() {
    this.closeModal.emit(false);
  }

  onAddCategoryButtonClick() {
    this.itemCategory = this.categoryForm.get('category').value.toLowerCase();

    if (this.listOfCategories) {
      for (let index = 0; index < this.listOfCategories.length; index++) {
        if (this.listOfCategories[index].toLowerCase() === this.itemCategory.toLowerCase()) {
          this.enableCategoryAdd = false;
          return;
        }
      }
      this.enableCategoryAdd = true;
    }
    this.closeModal.emit(this.itemCategory);
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      let file = event.target.files[0];
      const url = window.webkitURL.createObjectURL(file)
      this.uploadedImageUrl = url;
      console.log(url);
      let imgTag = document.createElement('img');
      imgTag.src = this.uploadedImageUrl;
      document.querySelector('app-item-or-category-modal .item-form .content').appendChild(imgTag);
    }
  }

  onAddItemButtonClick() {
    let itemName = this.itemForm.get('name').value.toLowerCase();

    if (this.listOfItems) {
      for (let index = 0; index < this.listOfItems.length; index++) {
        if (this.listOfItems[index]['name'].toLowerCase() === itemName) {
          this.enableItemAdd = false;
          return;
        }
      }
      this.enableItemAdd = true;
    }

    let itemPrice = this.itemForm.get('price').value;
    let itemDescription = this.itemForm.get('description').value;
    let itemId = 'eItem' + Math.floor(new Date().getTime() / 1000);
    let uploadedImageUrl = this.uploadedImageUrl;

    this.itemObj = {
      id: itemId,
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      imageUrl: uploadedImageUrl,
    }

    this.closeModal.emit(this.itemObj);
  }

}
