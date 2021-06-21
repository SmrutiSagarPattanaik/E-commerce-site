import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-input-field',
  templateUrl: './email-input-field.component.html',
  styleUrls: ['./email-input-field.component.css']
})
export class EmailInputFieldComponent implements OnInit {

  @Input() control: any;

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
