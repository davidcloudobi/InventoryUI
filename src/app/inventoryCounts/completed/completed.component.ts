import { Component, Input, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Service/inventory-service.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent implements OnInit {
  dataSourceObj;
  constructor(private inventoryServiceService: InventoryServiceService) { }

  ngOnInit(): void {
   this.dataSourceObj =  this.inventoryServiceService.getCompletedData();
  }

}
