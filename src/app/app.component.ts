import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
	selector: "app-root",
	imports: [RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "todo-app";
	name = "Mohammad";
	handleClick() {
		alert(`hello ${this.name}`);
	}
	handleMouseEnter(e: MouseEvent) {
		console.log(e);
	}
}
