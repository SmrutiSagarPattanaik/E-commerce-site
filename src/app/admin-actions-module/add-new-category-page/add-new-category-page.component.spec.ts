import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCategoryPageComponent } from './add-new-category-page.component';

describe('AddNewCategoryPageComponent', () => {
  let component: AddNewCategoryPageComponent;
  let fixture: ComponentFixture<AddNewCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
