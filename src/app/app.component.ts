import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeService } from './services/be-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(public be: BeService, private router: Router) {}

  ngOnInit() {
    if (!this.getUsername()) {
      this.router.navigateByUrl('/login');
    }
  }

  getUsername = () => {
    return localStorage.getItem('username');
  };

  title = 'todo-app';

  letters = ['A', 'B', 'C'];

  myFunction = () => {};
}
