import { Component, OnInit } from '@angular/core';

interface TodoItem {
  title: string;
  priority: number;
}

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})

export class TodolistComponent {
  myToDoList: Array<TodoItem> = [];
  showList: boolean = false;

  constructor() { }

  addItem = (f: any) => {
    const newItem = f.form.value;
    this.myToDoList.push(newItem)
    f.resetForm();
  }

  showHideItems = () => {
    this.showList = !this.showList;
  }

  isBiggerThan2 = (p: number): boolean =>  p > 2;

  filter = () => {
    this.myToDoList = this.myToDoList.filter((i) => this.isBiggerThan2(i.priority));
  }

}
