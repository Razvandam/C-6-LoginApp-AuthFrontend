import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['admin']);
      alert(
        'You can not acces the login page because you are already logged in.'
      );
    }
  }

  // Comment this part and use the onSubmit() function from below if you want to connect  to a Backend Server
  onSubmit() {
    // console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (next) => {
          this.router.navigate(['admin']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
      this.loginForm.value.email = '';
      this.loginForm.value.password = '';
    }
  }

  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log(this.loginForm.value.email);
  //     this.authService
  //       .login(this.loginForm.value.email!, this.loginForm.value.password!)
  //       .subscribe((response) => {
  //         localStorage.setItem('token', response); //JSON.stringify(response)
  //         this.router.navigate(['admin']);
  //       });
  //     this.loginForm.value.email = '';
  //     this.loginForm.value.password = '';
  //   }
  // }
}
