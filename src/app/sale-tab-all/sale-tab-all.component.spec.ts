import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabAllComponent } from './sale-tab-all.component';

describe('SaleTabAllComponent', () => {
  let component: SaleTabAllComponent;
  let fixture: ComponentFixture<SaleTabAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTabAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTabAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
