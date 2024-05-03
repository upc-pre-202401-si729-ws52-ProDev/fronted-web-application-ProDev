import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCustomerComponent } from './toolbar-customer.component';

describe('ToolbarCustomerComponent', () => {
  let component: ToolbarCustomerComponent;
  let fixture: ComponentFixture<ToolbarCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarCustomerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
