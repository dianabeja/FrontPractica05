import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = 'alex';
  password: string = 'alex';

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    if (form.valid) {
      this.loginService.login(this.username, this.password).subscribe(
        (response) => {
          console.log('Login successful:', response);
          location.reload(); 
          this.router.navigate(['/logout']);
        },
        (error) => {
          console.log('Error de autenticación:', error);
        }
      );
    }
  }
}
