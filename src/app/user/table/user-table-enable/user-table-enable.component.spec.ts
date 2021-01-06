import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableEnableComponent } from './user-table-enable.component';

describe('UserTableEnableComponent', () => {
  let component: UserTableEnableComponent;
  let fixture: ComponentFixture<UserTableEnableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableEnableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableEnableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
