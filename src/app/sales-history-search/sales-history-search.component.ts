import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sales-history-search',
  templateUrl: './sales-history-search.component.html',
  styleUrls: ['./sales-history-search.component.css']
})
export class SalesHistorySearchComponent implements OnInit {
  formData: FormGroup;
 @Input() users;
 @Input() outlets;
 @Input() statuses;
  outletControl = new FormControl();
  userControl = new FormControl();
  statusControl = new FormControl();
  // colorControl = new FormControl();
  // fontSizeControl = new FormControl(16, Validators.min(10));
  togVal = false;
  constructor(fb: FormBuilder) {
    this.formData = fb.group({
      users: this.userControl,
      outlets: this.outletControl,
      statuses: this.statusControl,

      // fontSize: this.fontSizeControl,
    });
  }

  ngOnInit(): void {
  }

  // getFontSize(): number {
  //   return Math.max(10, this.fontSizeControl.value);
  // }

}
