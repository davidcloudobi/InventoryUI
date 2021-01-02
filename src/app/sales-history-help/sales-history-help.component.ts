import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-history-help',
  templateUrl: './sales-history-help.component.html',
  styleUrls: ['./sales-history-help.component.css']
})
export class SalesHistoryHelpComponent implements OnInit {

  @Input() text;
  constructor() { }

  ngOnInit(): void {
  }

}
