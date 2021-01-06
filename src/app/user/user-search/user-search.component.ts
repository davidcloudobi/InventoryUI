import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  Outlet = ['Main', 'Lekki'];
  Role = ['Admin', 'Manager', 'Cashier'];
  constructor() { }

  ngOnInit(): void {
  }

}
