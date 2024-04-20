import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError: string = "";
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email] ],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  get email() {
    return this.loginForm.controls.email;
  }

  get password() {
    return this.loginForm.controls.password;
  }

  login() {
    if ( !this.loginForm.valid ) {
      this.loginForm.markAllAsTouched();
      alert("Error when entering data.")
      return;
    }

    this.router.navigateByUrl('/conferences');
    
    // this.loginError="";
    //   this.loginService.login(this.loginForm.value as LoginRequest).subscribe({
    //     next: (userData) => {
    //       console.log(userData);
    //     },
    //     error: (errorData) => {
    //       console.error(errorData);
    //       this.loginError=errorData;
    //     },
    //     complete: () => {
    //       console.info("Login completo");
    //       this.router.navigateByUrl('/inicio');
    //       this.loginForm.reset();
    //     }
    //   })
  }

}
