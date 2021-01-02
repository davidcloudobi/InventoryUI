import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: {Product, Supplier, Inventory, Retail, Active_Created }[] = [
  {
    Inventory: 1,
    Product: 'Hydrogen',
   Retail: 1.0079,
    Supplier: 'H',
    Active_Created: `Hydrogen is a chemical element with symbol H.`
  }, {
    Inventory: 2,
    Product: 'Helium',
   Retail: 4.0026,
    Supplier: 'He',
    Active_Created: `Helium is a chemical element with symbol He.`
  }, {
    Inventory: 3,
    Product: 'Lithium',
   Retail: 6.941,
    Supplier: 'Li',
    Active_Created: `Lithium is a chemical element with symbol Li.`
  }, {
    Inventory: 4,
    Product: 'Beryllium',
   Retail: 9.0122,
    Supplier: 'Be',
    Active_Created: `Beryllium is a chemical element with symbol Be.`
  }, {
    Inventory: 5,
    Product: 'Boron',
   Retail: 10.811,
    Supplier: 'B',
    Active_Created: `Boron is a chemical element with symbol B.`
  }, {
    Inventory: 6,
    Product: 'Carbon',
   Retail: 12.0107,
    Supplier: 'C',
    Active_Created: `Carbon is a chemical element with symbol C.`
  }, {
    Inventory: 7,
    Product: 'Nitrogen',
   Retail: 14.0067,
    Supplier: 'N',
    Active_Created: `Nitrogen is a chemical element with symbol N.`
  }, {
    Inventory: 8,
    Product: 'Oxygen',
   Retail: 15.9994,
    Supplier: 'O',
    Active_Created: `Oxygen is a chemical element with symbol O.`
  }, {
    Inventory: 9,
    Product: 'Fluorine',
   Retail: 18.9984,
    Supplier: 'F',
    Active_Created: `Fluorine is a chemical element with symbol F.`
  }, {
    Inventory: 10,
    Product: 'Neon',
   Retail: 20.1797,
    Supplier: 'Ne',
    Active_Created: `Neon is a chemical element with symbol Ne. `
  },
];

@Component({
  selector: 'app-stock-control',
  templateUrl: './stock-control.component.html',
  styleUrls: ['./stock-control.component.css']
})
export class StockControlComponent implements OnInit {
  columnsToDisplay = ['Product', 	'Supplier',	'Inventory',	'Retail'	];
  dataSource = new MatTableDataSource<{Product, Supplier, Inventory, Retail, Active_Created }>(ELEMENT_DATA);
  productType = ['All type'];
  togVal = false;
  constructor() { }

  ngOnInit(): void {
  }

}
