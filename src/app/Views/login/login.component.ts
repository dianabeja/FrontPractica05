// login.component.ts
import { Component , OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = 'alex';
  password: string = 'alex';

  constructor(private router: Router, private loginService: LoginService) {}
  ngOnInit(): void {
    this.loginService.login(this.username, this.password).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  login(form: NgForm) {
    if (form.valid) {

      const isAuthenticated = true;

      if (isAuthenticated) {
        this.router.navigate(['/empleados']);
      } else {
        console.log('Error de autenticación');
      }
    }
  }
}
