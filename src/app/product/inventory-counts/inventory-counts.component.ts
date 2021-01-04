import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { InventoryCountData, InventoryCountTableData, PeriodicElement } from 'src/app/Interface/interface';
import { InventoryServiceService } from '../../Service/inventory-service.service';
import { logging } from 'protractor';



@Component({
  selector: 'app-inventory-counts',
  templateUrl: './inventory-counts.component.html',
  styleUrls: ['./inventory-counts.component.css']
})
export class InventoryCountsComponent implements OnInit {
  constructor(private inventoryServiceService: InventoryServiceService) { }
   dataSourceObj;
   links: {path: string, label: string}[] = [
    {path: '/inventory-counts/due', label: 'Due (2)'
},
{path: '/inventory-counts/upcoming', label: 'Upcoming (0)'},
    {path: '/inventory-counts/completed', label: 'Completed'},
     {path: '/inventory-counts/cancelled', label: 'Cancelled'}
  ];
  activeLink = this.links[0].label;
  background: ThemePalette = undefined;


  @ViewChild('tabGroup') tabGroup;

  toggleBackground(): void {
    this.background = this.background ? undefined : 'primary';
  }

  ngOnInit(): void {
    // this.dataSourceObj = this.inventoryServiceService.getDueData();

  }

  // tabChanged(tabChangeEvent: MatTabChangeEvent): void {
  //   console.log('tabChangeEvent => ', tabChangeEvent);
  //   console.log('index => ', tabChangeEvent.index);

  //   this.inventoryServiceService.ChangedTab(+tabChangeEvent.index);
  //   console.log(this.dataSourceObj);

    // switch (tabChangeEvent.index) {
    //   case 0:
    //     this.dataSource = new MatTableDataSource<InventoryCountData>(ELEMENT_DATA.Due);
    //     break;
    //     case 1:
    //       this.dataSource = new MatTableDataSource<InventoryCountData>(ELEMENT_DATA.Upcoming);
    //       break;
    //       case 2:
    //         this.dataSource = new MatTableDataSource<InventoryCountData>(ELEMENT_DATA.Completed);
    //         break;
    //         case 3:
    //           this.dataSource = new MatTableDataSource<InventoryCountData>(ELEMENT_DATA.Cancelled);
    //           break;
    //   default:
    //     break;
    // }

  // }


}
