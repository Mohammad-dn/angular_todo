import { Routes } from "@angular/router";
import { MasterLayoutComponent } from "./layout/master-ayout/master-layout.component";
import { TodoComponent } from "./pages/todo/todo.component";

export const routes: Routes = [
	{
		path: "",
		component: MasterLayoutComponent,
		loadChildren: () =>
			import("./pages/home/home.routes").then((c) => c.routes),
	},
	{
		path: "todo",
		component: TodoComponent,
	},
	{
		path: "todo/:id/:name",
		component: TodoComponent,
	},
];
