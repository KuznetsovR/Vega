import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	login = new FormControl('', [Validators.required]);
	password = new FormControl('', [Validators.required]);
	loginForm = new FormGroup({
		login: this.login,
		password: this.password
	});
	wrongPasswordOrEmail = false;
	constructor() {}
	ngOnInit(): void {}
	submitForm() {
		this.wrongPasswordOrEmail = true;
		console.log('The form was submitted');
	}
}
