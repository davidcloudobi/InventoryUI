import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {

  constructor( private router: Router) {}

  ngOnInit(): void {
  }

  openCloseReg(): void{
    this.router.navigate(['/registerclosure']);

  }

}
