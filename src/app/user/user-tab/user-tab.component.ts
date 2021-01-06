import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
 @Input() text;
@Input() helpLink;
@Input() btnText;
  constructor() { }

  ngOnInit(): void {

  }

}
