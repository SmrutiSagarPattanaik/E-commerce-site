import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveFromCategoryPageComponent } from './remove-from-category-page.component';

describe('RemoveFromCategoryPageComponent', () => {
  let component: RemoveFromCategoryPageComponent;
  let fixture: ComponentFixture<RemoveFromCategoryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveFromCategoryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveFromCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
