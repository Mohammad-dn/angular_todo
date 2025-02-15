import { JsonPipe } from "@angular/common";
import { Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { LocalStorageService } from "./services/localStorage.service";
import { TodoService } from "./services/todo.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, JsonPipe],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
	providers: [LocalStorageService],
})
export class AppComponent {
	localStorageService = inject(LocalStorageService);
	todoService: TodoService = inject(TodoService);

	user: any;

	constructor() {
		this.handleGEtDataFromLocalStorage();
		this.todoService.getTodo(1);
	}

	handleSetUserData() {
		this.localStorageService.set("USER", {
			name: "ali",
			age: 30,
		});
	}

	handleGEtDataFromLocalStorage() {
		this.user = this.localStorageService.get("USER");
	}
}
