import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoyCountMainComponent } from './inventoy-count-main.component';

describe('InventoyCountMainComponent', () => {
  let component: InventoyCountMainComponent;
  let fixture: ComponentFixture<InventoyCountMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoyCountMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoyCountMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
