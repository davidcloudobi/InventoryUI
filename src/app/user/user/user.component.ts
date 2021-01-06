import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  text  = 'Manage users and their sales targets. ';
  helpLink = 'Need help?';
  btnText = 'Add User';
  constructor() { }

  ngOnInit(): void {
  }

}
