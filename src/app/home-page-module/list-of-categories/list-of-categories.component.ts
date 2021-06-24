import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-categories',
  templateUrl: './list-of-categories.component.html',
  styleUrls: ['./list-of-categories.component.css']
})
export class ListOfCategoriesComponent implements OnInit {

  listOfCategories: string[];
  noCategories=false;

  @Input() filterByCategory ='';
  
  constructor() {
    this.listOfCategories = JSON.parse(localStorage.getItem('listOfCategories'));
   }

  ngOnInit(): void {
    !this.listOfCategories ? this.noCategories=true : this.noCategories=false; 
  }

}
