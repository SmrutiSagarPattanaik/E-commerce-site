import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-to-category-page',
  templateUrl: './add-to-category-page.component.html',
  styleUrls: ['./add-to-category-page.component.css']
})
export class AddToCategoryPageComponent implements OnInit {

  listOfItems: any;
  listOfCategories: string[];
  noCategories=false;

  itemForm = this.formBuilder.group({
    category: ['', Validators.required],
    description: ['', Validators.required],
    id: ['', Validators.required],
    imageUrl: ['', Validators.required],
    name: ['', Validators.required],
    price: [null, Validators.required]
  })


  constructor(private formBuilder:FormBuilder) {
    this.listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
    this.listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));
    if(!this.listOfCategories) {
      this.noCategories=true;
    }
   }

  ngOnInit(): void {
  }

  onClickSave() {
    let itemObj = {
      category: this.itemForm.get('category').value,
      description: this.itemForm.get('description').value,
      id: this.itemForm.get('id').value,
      imageUrl: this.itemForm.get('imageUrl').value,
      name: this.itemForm.get('name').value,
      price: this.itemForm.get('price').value
    }
    this.itemForm.reset();
    this.listOfItems.push(itemObj);
    localStorage.setItem('listOfItems',JSON.stringify(this.listOfItems));
    alert('Item added successfully!')
  }

}
