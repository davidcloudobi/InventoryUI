import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryCountaTableComponent } from './inventory-counta-table.component';

describe('InventoryCountaTableComponent', () => {
  let component: InventoryCountaTableComponent;
  let fixture: ComponentFixture<InventoryCountaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryCountaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryCountaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
