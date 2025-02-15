import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TodoService {
	httpClient: HttpClient = inject(HttpClient);

	getTodo(id: number) {
		this.httpClient
			.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.subscribe({
				next: (res) => {
					console.log(res);
				},
				error: (err) => {
					console.log(err);
				},
			}).unsubscribe;
	}
}
