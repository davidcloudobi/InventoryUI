import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabContinueComponent } from './sale-tab-continue.component';

describe('SaleTabContinueComponent', () => {
  let component: SaleTabContinueComponent;
  let fixture: ComponentFixture<SaleTabContinueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleTabContinueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleTabContinueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
