import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-input-field',
  templateUrl: './date-input-field.component.html',
  styleUrls: ['./date-input-field.component.css']
})
export class DateInputFieldComponent implements OnInit {

  @Input() control: any;

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }
}
