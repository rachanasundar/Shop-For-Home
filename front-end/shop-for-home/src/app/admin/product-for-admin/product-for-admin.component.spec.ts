import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductForAdminComponent } from './product-for-admin.component';

describe('ProductForAdminComponent', () => {
  let component: ProductForAdminComponent;
  let fixture: ComponentFixture<ProductForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
