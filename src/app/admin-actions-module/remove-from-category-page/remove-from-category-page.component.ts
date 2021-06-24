import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-remove-from-category-page',
  templateUrl: './remove-from-category-page.component.html',
  styleUrls: ['./remove-from-category-page.component.css']
})
export class RemoveFromCategoryPageComponent implements OnInit {

  listOfItems: any;
  listOfCategories: string[];

  categoryForm = this.formBuilder.group({
    category: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.listOfItems = JSON.parse(localStorage.getItem('listOfItems'));
    this.listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));
  }

  onClickDisplayItems() {
    
  }

}
