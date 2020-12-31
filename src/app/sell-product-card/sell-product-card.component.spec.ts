import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellProductCardComponent } from './sell-product-card.component';

describe('SellProductCardComponent', () => {
  let component: SellProductCardComponent;
  let fixture: ComponentFixture<SellProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
