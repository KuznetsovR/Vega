import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageModule } from './pages/login-page/login-page.module';
import { SelectDestinationPageModule } from './pages/select-destination-page/select-destination-page.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, LoginPageModule, SelectDestinationPageModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
