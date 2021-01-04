import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCountHelpComponent } from './inventory-count-help.component';

describe('InventoryCountHelpComponent', () => {
  let component: InventoryCountHelpComponent;
  let fixture: ComponentFixture<InventoryCountHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCountHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCountHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
