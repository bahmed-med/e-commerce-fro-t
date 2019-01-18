import { Component, OnInit } from '@angular/core';

import { LoginService}  from  './../../services/login/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  
  password: String = '';
  username: String = '';
  loginForm: FormGroup;
  error: string = '';
  msgErrorConnexion: String = '';
  

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private LoginService: LoginService
    ) { 
      this.loginForm = formBuilder.group({
        'username' : ['', Validators.required],
        'password' : ['', Validators.required]
      });
    
  }



   onSubmit() {
        this.LoginService
            .login(this.loginForm.value)
            .subscribe(
                data => {
                    localStorage.setItem('id_token', data.token);
                    this.router.navigate(['post']);
                },
                error => this.error = error.message
            );
    }

  ngOnInit() {
  }

}
