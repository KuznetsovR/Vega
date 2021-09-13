import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	login: string = '';
	password: string = '';
	loginControl = new FormControl('', [Validators.required]);
	passwordControl = new FormControl('', [Validators.required]);
	loginForm = new FormGroup({
		login: this.loginControl,
		password: this.passwordControl
	});
	wrongPasswordOrEmail = false;

	constructor() {}

	ngOnInit(): void {}
  changeLogin(event: Event){
	  this.login = (event.target as HTMLInputElement).value
  }
  changePassword(event: Event){
	  this.password = (event.target as HTMLInputElement).value
  }
	submitForm() {
		this.wrongPasswordOrEmail = true;
    console.log(this.login, this.password, 'The form was submitted')
	}
}
