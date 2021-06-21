import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() emitItemName = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendItemName(event: any) {
    this.emitItemName.emit(event.target.value);
  }


}
