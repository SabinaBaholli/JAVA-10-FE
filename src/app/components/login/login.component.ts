import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BeService } from 'src/app/services/be-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private backend: BeService
    ) { }

  ngOnInit(): void {
  }

  handleResponse = (username: any, response: any) => {
    const hasUser = response.filter((user: any) => user.username === username).length;
    if (hasUser) {
      this.router.navigateByUrl('/');
    } else {
      this.handleError();
    }
  }

  handleError = () => {
    alert('Wrong credentials!')
  }

  login = (formValues: NgForm) => {
    const username = formValues.form.value.username;
    localStorage.setItem('username', username);
    this.backend.getUsers().subscribe(
    {
      next: this.handleResponse.bind(this, username),
      error: this.handleError.bind(this),
    }
    )
  }

}
