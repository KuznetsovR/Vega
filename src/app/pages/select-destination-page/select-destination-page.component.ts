import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-select-destination-page',
	templateUrl: './select-destination-page.component.html',
	styleUrls: ['./select-destination-page.component.scss']
})
export class SelectDestinationPageComponent implements OnInit {
	buttons: string[] = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
	constructor() {}

	ngOnInit(): void {}
}
