import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-reg',
  templateUrl: './business-reg.component.html',
  styleUrls: ['./business-reg.component.css']
})
export class BusinessRegComponent implements OnInit {
  hide = true;
  businessType = ['Adult', 'Bike', 'Fashion'];
  NumberOfLocations = ['1 Location', '2-9 Locations', '10+ Locations'];
  Turnover = ['1M', '2M', '5M', '10M', 'Above 10M']
  constructor() { }

  ngOnInit(): void {
  }

}
