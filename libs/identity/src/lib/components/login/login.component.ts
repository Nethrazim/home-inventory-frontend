import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService, AuthenticateRequest, AuthenticateResponse } from '@home-inventory-fe/backend-library';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'hio-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent{
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private accountService: AccountService, private router: Router) {}


  onLogin()
  {
    let request = { email: this.loginForm.get('email')?.value, password: this.loginForm.get('password')?.value } as AuthenticateRequest;
    this.accountService.apiIdentityAccountAuthenticatePost(request).pipe(
      catchError((err: any) => {
        console.log(err);
        return of(err);
      })
    ).subscribe((data: AuthenticateResponse) => {
      console.log(data.entity?.value);
      if(data.entity?.value) {
        this.router.navigate(['home']);
      }
    });
  }

}
