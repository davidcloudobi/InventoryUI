import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/Interface/interface';

const ELEMENT_DATA: {
  Name: string,
    Role: string,
    Outlet: string,
    Daily_Target: string,
    Weekly_Target: string,
    Monthly_Target: string,
    Last_Active: string,
    Enabled: any
}[] =  [
  {
    Name: 'www',
    Role: 'hello',
    Outlet: 'sss',
    Daily_Target: 'aaa',
    Weekly_Target: 'qqq',
    Monthly_Target: 'www',
    Last_Active: 'wwww',
    Enabled: 'swsww'
}
];

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, AfterViewInit {


  displayedColumns: string[] = ['Name', 'Role', 'Outlet', 'Daily_Target', 'Weekly_Target', 'Last_Active', 'Enabled'];
  dataSource = new MatTableDataSource<{
    Name: string,
      Role: string,
      Outlet: string,
      Daily_Target: string,
      Weekly_Target: string,
      Monthly_Target: string,
      Last_Active: string,
      Enabled: any
  }>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
