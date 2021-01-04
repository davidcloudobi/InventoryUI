import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCountAdsComponent } from './inventory-count-ads.component';

describe('InventoryCountAdsComponent', () => {
  let component: InventoryCountAdsComponent;
  let fixture: ComponentFixture<InventoryCountAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCountAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCountAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
