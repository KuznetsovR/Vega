import { NgModule } from '@angular/core';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
	declarations: [LoginPageComponent],
	imports: [BrowserModule, ReactiveFormsModule],
	exports: [LoginPageComponent]
})
export class LoginPageModule {}
