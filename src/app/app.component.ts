import { Component } from '@angular/core';
import { BeService } from './services/be-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public be: BeService) {}

  getUsername = () => {
    return localStorage.getItem('username');
  }

  title = 'todo-app';

  letters = ['A', 'B', 'C'];

  myFunction = () => {};
}
