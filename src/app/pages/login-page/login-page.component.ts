import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
	loginControl = new FormControl('', [Validators.required]);
	passwordControl = new FormControl('', [Validators.required]);
	loginForm = new FormGroup({
		login: this.loginControl,
		password: this.passwordControl
	});
	wrongPasswordOrEmail = false;

	constructor() {}

	ngOnInit(): void {}
	submitForm() {
		this.wrongPasswordOrEmail = true;
    console.log('The form was submitted', this.loginControl.value, this.passwordControl.value)
	}
}
