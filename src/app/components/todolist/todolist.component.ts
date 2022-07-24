import { Component, OnDestroy, OnInit } from '@angular/core';
import { BeService } from 'src/app/services/be-service.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent implements OnInit, OnDestroy {
  showForm: boolean = false;

  ngOnInit() {
    this.getItems();
  }

  ngOnDestroy() {

  }

  constructor(public be: BeService) {}

  addItem = (f: any) => {
    const newItem = f.form.value;
    this.be.myToDoList.push(newItem);
    f.resetForm();
  };

  handleUpdateResponse = (res: any) => {
    console.log(res);
  };

  handleError = (res: any) => {
    console.log(res);
  };

  getItems = () => {
    this.be.getListItems().subscribe({
      next: this.handleUpdateResponse.bind(this),
      error: this.handleError.bind(this),
    });
  };

  showHideItems = () => {
    this.showForm = !this.showForm;
  };

  isBiggerThan2 = (p: number): boolean => p > 2;

  filter = () => {
    this.be.myToDoList = this.be.myToDoList.filter((i) =>
      this.isBiggerThan2(i.priority)
    );
  };
}
