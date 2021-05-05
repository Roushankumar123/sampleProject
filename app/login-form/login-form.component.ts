import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  fullname = '';
  password = '';

  constructor() { }
  userLogin(loginForm:NgForm){
  console.log(loginForm.value);
}

  ngOnInit(): void {
  }

}
function loginForm(loginForm: any, value: any) {
  throw new Error('Function not implemented.');
}

function value(loginForm: NgForm, value: any) {
  throw new Error('Function not implemented.');
}

