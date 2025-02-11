import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	template: `
		<h1>home page</h1>
		<button (click)="handleNavigateTodo()">navigate to todo</button>
	`,
	standalone: true,
})
export class HomeComponent implements OnInit {
	router: Router = inject(Router);
	constructor() {}

	ngOnInit(): void {}
	handleNavigateTodo() {
		this.router.navigate(["todo", 12305, "todo-number-one"], {
			queryParams: {
				id: 1231,
				name: "Todo divone",
			},
		});
	}
}
