import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-todo",
	template: `<h1>children todo route</h1>`,
	standalone: true,
})
export class TodoComponent implements OnInit {
	route: ActivatedRoute = inject(ActivatedRoute);
	constructor() {}

	ngOnInit(): void {
		this.route.queryParams.subscribe((param) => {});

		console.log(this.route.snapshot.queryParamMap.get("name"));
	}
}
