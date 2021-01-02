import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, AfterViewInit, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../Interface/interface';



@Component({
  selector: 'app-sales-history-table',
  templateUrl: './sales-history-table.component.html',
  styleUrls: ['./sales-history-table.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})



export class SalesHistoryTableComponent implements OnInit, AfterViewInit {
  // dataSource =  new MatTableDataSource(ELEMENT_DATA);
  @Input() dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 @Input() columnsToDisplay;
  expandedElement: PeriodicElement | null;


  constructor() { }


  ngOnInit(): void {
    this.dataSource.filterPredicate = (data, filter: string): boolean => data.name === undefined || data.name == null ? data.Product :
     data.name.toLowerCase().includes(filter)
      || data.symbol.toLowerCase().includes(filter) ||
      data.position.toString().includes(filter);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
