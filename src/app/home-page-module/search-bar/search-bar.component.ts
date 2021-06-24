import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() emitItemCategory= new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendItemCategory(event: any) {
    this.emitItemCategory.emit(event.target.value);
  }


}
