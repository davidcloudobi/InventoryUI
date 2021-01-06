import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  links: {path: string, label: string}[] = [
    {path: '/users/user', label: 'Users'},
    {path: '/users/role', label: 'Roles'},
  ];
  activeLink = this.links[0].label;
  background: ThemePalette = undefined;

  toggleBackground(): void {
    this.background = this.background ? undefined : 'primary';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
