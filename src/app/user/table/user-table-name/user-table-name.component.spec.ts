import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableNameComponent } from './user-table-name.component';

describe('UserTableNameComponent', () => {
  let component: UserTableNameComponent;
  let fixture: ComponentFixture<UserTableNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTableNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
