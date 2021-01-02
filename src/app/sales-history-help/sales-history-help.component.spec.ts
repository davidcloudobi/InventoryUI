import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistoryHelpComponent } from './sales-history-help.component';

describe('SalesHistoryHelpComponent', () => {
  let component: SalesHistoryHelpComponent;
  let fixture: ComponentFixture<SalesHistoryHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesHistoryHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHistoryHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
