import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-table-name',
  templateUrl: './user-table-name.component.html',
  styleUrls: ['./user-table-name.component.css']
})
export class UserTableNameComponent implements OnInit {
  imageUrl = 'https://cdn.the-scientist.com/assets/articleNo/67431/hImg/37292/lemur-wrist-glands-scent-pheromones-primates-testosterone-mating-breeding-sexual-communication-x.png';
  constructor() { }

  ngOnInit(): void {
  }

}
