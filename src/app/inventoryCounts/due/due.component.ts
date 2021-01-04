import { Component, Input, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Service/inventory-service.service';

@Component({
  selector: 'app-due',
  templateUrl: './due.component.html',
  styleUrls: ['./due.component.css']
})
export class DueComponent implements OnInit {
  dataSourceObj;
  constructor(private inventoryServiceService: InventoryServiceService) { }

  ngOnInit(): void {
   this.dataSourceObj =  this.inventoryServiceService.getDueData();
  }
}
