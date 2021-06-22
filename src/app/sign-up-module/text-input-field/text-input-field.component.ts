import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-text-input-field',
  templateUrl: './text-input-field.component.html',
  styleUrls: ['./text-input-field.component.css']
})
export class TextInputFieldComponent implements OnInit {

  @Input() control: any;

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }
}
