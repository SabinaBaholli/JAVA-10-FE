import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BeService } from 'src/app/services/be-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private backend: BeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleSignUpSuccess = () => {
    alert('Registration was successful!')
    this.router.navigateByUrl('login');
  }

  addItem(val: any) {
    const newUser = val.form.value;
    this.backend.postUser(newUser).subscribe({
      next: this.handleSignUpSuccess
    });
  } 

}
