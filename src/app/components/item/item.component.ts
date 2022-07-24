import { Component, Input, OnInit } from '@angular/core';
import { BeService } from 'src/app/services/be-service.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() listItem: any;
  changeText = false;
  constructor(private backend: BeService) { }

  printItem = (item: any) => {
    console.log(item);
  }

  ngOnInit(): void {
 
  }

}