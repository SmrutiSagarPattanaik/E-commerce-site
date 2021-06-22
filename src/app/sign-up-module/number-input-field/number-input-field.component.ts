import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-input-field',
  templateUrl: './number-input-field.component.html',
  styleUrls: ['./number-input-field.component.css']
})
export class NumberInputFieldComponent implements OnInit {

  @Input() control: any;

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
