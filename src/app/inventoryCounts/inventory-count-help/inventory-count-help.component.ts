import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-count-help',
  templateUrl: './inventory-count-help.component.html',
  styleUrls: ['./inventory-count-help.component.css']
})
export class InventoryCountHelpComponent implements OnInit {

  text = 'Create, schedule and complete counts to keep track of your inventory. ' ;
  constructor() { }

  ngOnInit(): void {
  }

}
