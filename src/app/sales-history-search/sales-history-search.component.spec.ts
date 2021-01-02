import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesHistorySearchComponent } from './sales-history-search.component';

describe('SalesHistorySearchComponent', () => {
  let component: SalesHistorySearchComponent;
  let fixture: ComponentFixture<SalesHistorySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesHistorySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesHistorySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
