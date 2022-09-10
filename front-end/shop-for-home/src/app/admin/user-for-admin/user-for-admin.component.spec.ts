import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForAdminComponent } from './user-for-admin.component';

describe('UserForAdminComponent', () => {
  let component: UserForAdminComponent;
  let fixture: ComponentFixture<UserForAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserForAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserForAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
