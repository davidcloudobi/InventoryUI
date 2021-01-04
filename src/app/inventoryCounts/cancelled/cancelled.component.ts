import { Component, Input, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Service/inventory-service.service';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.css']
})
export class CancelledComponent implements OnInit {
  dataSourceObj;
  constructor(private inventoryServiceService: InventoryServiceService) { }

  ngOnInit(): void {
   this.dataSourceObj =  this.inventoryServiceService.getCancelledData();
  }
}
