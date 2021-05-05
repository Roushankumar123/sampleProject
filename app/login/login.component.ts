import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormValidate: any = FormGroup;

  constructor(private formbuilder:FormBuilder) { 
    this.loginForm();
  }
  loginForm() {
    this.loginFormValidate = this.formbuilder.group({
      uname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

}
