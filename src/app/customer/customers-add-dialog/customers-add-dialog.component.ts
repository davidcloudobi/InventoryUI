import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-customers-add-dialog',
  templateUrl: './customers-add-dialog.component.html',
  styleUrls: ['./customers-add-dialog.component.css']
})
export class CustomersAddDialogComponent implements OnInit,OnChanges {
  togVal = true;
  productType = ['fashion', 'sport'];
  gender = ['Man', 'Woman'];
  checked: boolean;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.checked);
  }


  ngOnInit(): void {

  }
  toggle(tabChangeEvent: MatTabChangeEvent): void {


    if (+tabChangeEvent.index === 0){
      this.togVal = true;
    }
    else{
      this.togVal = false;
    }
  }
}
