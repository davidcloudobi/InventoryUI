import { Component, Input, OnInit } from '@angular/core';
import { InventoryServiceService } from 'src/app/Service/inventory-service.service';

@Component({
  selector: 'app-up-coming',
  templateUrl: './up-coming.component.html',
  styleUrls: ['./up-coming.component.css']
})
export class UpComingComponent implements OnInit {
   dataSourceObj;
  constructor(private inventoryServiceService: InventoryServiceService) { }

  ngOnInit(): void {
   this.dataSourceObj =  this.inventoryServiceService.getUpcomingData();
  }

}
