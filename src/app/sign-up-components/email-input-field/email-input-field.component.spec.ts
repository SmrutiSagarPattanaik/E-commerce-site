import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailInputFieldComponent } from './email-input-field.component';

describe('EmailInputFieldComponent', () => {
  let component: EmailInputFieldComponent;
  let fixture: ComponentFixture<EmailInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailInputFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
