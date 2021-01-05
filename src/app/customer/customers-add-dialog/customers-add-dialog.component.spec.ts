import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersAddDialogComponent } from './customers-add-dialog.component';

describe('CustomersAddDialogComponent', () => {
  let component: CustomersAddDialogComponent;
  let fixture: ComponentFixture<CustomersAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
