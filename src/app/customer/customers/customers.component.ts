import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CustomersAddDialogComponent } from '../customers-add-dialog/customers-add-dialog.component';

const ELEMENT_DATA: {Credit, Location, Customer, Store, Account }[] = [
  {
    Customer: 1,
    Credit: 'Hydrogen',
   Store: 1.0079,
    Location: 'H',
    Account: `Hydrogen`
  }, {
    Customer: 2,
    Credit: 'Helium',
   Store: 4.0026,
    Location: 'He',
    Account: `Helium`
  }, {
    Customer: 3,
    Credit: 'Lithium',
   Store: 6.941,
    Location: 'Li',
    Account: `Lithium`
  }, {
    Customer: 4,
    Credit: 'Beryllium',
   Store: 9.0122,
    Location: 'Be',
    Account: `Beryllium `
  }, {
    Customer: 5,
    Credit: 'Boron',
   Store: 10.811,
    Location: 'B',
    Account: `Boron `
  }, {
    Customer: 6,
    Credit: 'Carbon',
   Store: 12.0107,
    Location: 'C',
    Account: `Carbon `
  }, {
    Customer: 7,
    Credit: 'Nitrogen',
   Store: 14.0067,
    Location: 'N',
    Account: `Nitrogen`
  }, {
    Customer: 8,
    Credit: 'Oxygen',
   Store: 15.9994,
    Location: 'O',
    Account: `Oxygen`
  }, {
    Customer: 9,
    Credit: 'Fluorine',
   Store: 18.9984,
    Location: 'F',
    Account: `Fluorine`
  }, {
    Customer: 10,
    Credit: 'Neon',
   Store: 20.1797,
    Location: 'Ne',
    Account: `Neon  `
  },
];

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  columnsToDisplay = ['Customer',	'Location' , 'Store', 'Credit'	];
  dataSource = new MatTableDataSource<{Credit, Location, Customer, Store, Account }>(ELEMENT_DATA);
  productType = ['All type'];
  togVal = false;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(CustomersAddDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  ngOnInit(): void {
  }

}
