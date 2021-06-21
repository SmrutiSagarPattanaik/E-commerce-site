import { Component, OnInit, Input } from '@angular/core';

import { itemDetailsList } from '../../../assets/all-items';

@Component({
  selector: 'app-list-of-items',
  templateUrl: './list-of-items.component.html',
  styleUrls: ['./list-of-items.component.css']
})
export class ListOfItemsComponent implements OnInit {

  @Input() filterByItemName = '';

  listOfItems = itemDetailsList;
  constructor() { }

  ngOnInit(): void {
  }

}
