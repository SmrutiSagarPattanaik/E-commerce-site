import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-password-input-field',
  templateUrl: './password-input-field.component.html',
  styleUrls: ['./password-input-field.component.css']
})
export class PasswordInputFieldComponent implements OnInit {
  @Input() control: any;

  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }
}
