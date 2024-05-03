import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListCustomersComponent } from './product-list-customers.component';

describe('ProductListCustomersComponent', () => {
  let component: ProductListCustomersComponent;
  let fixture: ComponentFixture<ProductListCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListCustomersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductListCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
