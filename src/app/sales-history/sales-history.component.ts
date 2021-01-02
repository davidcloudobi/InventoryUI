import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sales-history',
  templateUrl: './sales-history.component.html',
  styleUrls: ['./sales-history.component.css']
})
export class SalesHistoryComponent implements OnInit {
  links: {path: string, label: string}[] = [
    {path: '/sale-history/all', label: 'All'},
    {path: '/sale-history/completed', label: 'Process return'},
     {path: '/sale-history/continue', label: 'Continue sale'}
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
