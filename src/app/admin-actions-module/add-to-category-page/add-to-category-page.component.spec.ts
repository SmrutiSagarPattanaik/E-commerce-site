import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToCategoryPageComponent } from './add-to-category-page.component';

describe('AddToCategoryPageComponent', () => {
  let component: AddToCategoryPageComponent;
  let fixture: ComponentFixture<AddToCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
