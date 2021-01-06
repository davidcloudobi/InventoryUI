import { Component, OnInit } from '@angular/core';
const today = new Date();
@Component({
  selector: 'app-user-role',
  templateUrl: './user-role.component.html',
  styleUrls: ['./user-role.component.css']
})
export class UserRoleComponent implements OnInit {
  text  = 'Manage what each role can see and do. ';
   displayedColumns = ['Name',	'Last_Saved'];
   dataSource: {Name: string , Last_Saved: Date}[] = [{
    Name: 'Manager',
    Last_Saved: today
   },
   {
    Name: 'Admin',
    Last_Saved: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
   },
   {
    Name: 'Cashier',
    Last_Saved: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3)
   }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
