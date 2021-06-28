import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOrCategoryModalComponent } from './item-or-category-modal.component';

describe('ItemOrCategoryModalComponent', () => {
  let component: ItemOrCategoryModalComponent;
  let fixture: ComponentFixture<ItemOrCategoryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemOrCategoryModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemOrCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
