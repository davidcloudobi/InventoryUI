import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerAmountDialogComponent } from './drawer-amount-dialog.component';

describe('DrawerAmountDialogComponent', () => {
  let component: DrawerAmountDialogComponent;
  let fixture: ComponentFixture<DrawerAmountDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawerAmountDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerAmountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
