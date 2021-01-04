import { InventoryCountData, InventoryCountTableData } from './../../Interface/interface';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/Interface/interface';
import { InventoryServiceService } from '../../Service/inventory-service.service';



@Component({
  selector: 'app-inventory-counta-table',
  templateUrl: './inventory-counta-table.component.html',
  styleUrls: ['./inventory-counta-table.component.css']
})
export class InventoryCountaTableComponent implements OnInit {
  displayedColumns = ['name', 'status',  'outlet', 'count'];
   @Input() dataSourceObj;
 dataSource;
  toggle: boolean;
  constructor() {

  }



  ngOnInit(): void {
     console.log(this.dataSourceObj);

     this.dataSource = new MatTableDataSource(this.dataSourceObj);
     if (this.dataSourceObj != null) {
      this.toggle = this.dataSource._filterData.length > 0 ? true : false;
   }
    // console.log(this.dataSource);
  }

}
