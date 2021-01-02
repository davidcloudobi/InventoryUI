import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabCompletedComponent } from './sale-tab-completed.component';

describe('SaleTabCompletedComponent', () => {
  let component: SaleTabCompletedComponent;
  let fixture: ComponentFixture<SaleTabCompletedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTabCompletedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTabCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
