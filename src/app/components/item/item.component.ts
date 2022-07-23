import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() listItem: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.listItem);
  }

}
