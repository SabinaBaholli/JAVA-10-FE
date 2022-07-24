import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/TodoItem';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class BeService {
  myToDoList: Array<TodoItem> = [];
  BASE_URL: string= 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getListItems = () => {
    return this.http.get(this.BASE_URL + '/items');
  }

  getItem = (id: number) => {
    return this.http.get(`${this.BASE_URL}/items/${id}`);
  }

  postItem = (item: TodoItem) => {
    return this.http.post(this.BASE_URL + '/items', item);
  }

  deleteItem = (id: number) => {
    return this.http.delete(this.BASE_URL + '/items/' + id );
  }

  getUsers = () => {
    return this.http.get(this.BASE_URL + '/users');
  }

  postUser = (user: User) => {
    return this.http.post(this.BASE_URL + '/users', user);
  }

}
