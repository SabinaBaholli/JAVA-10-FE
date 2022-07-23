import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';

@Injectable({
  providedIn: 'root'
})
export class BeService {
  myToDoList: Array<TodoItem> = [];

  constructor(private http: HttpClient) { }

  getListItems = () => {
    return this.http.get('http://localhost:3000/items');
  }

  getItem = (id: number) => {
    return this.http.get(`http://localhost:3000/items/${id}`);
  }

}
