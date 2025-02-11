import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";
@Component({
	selector: "app-master-layout",
	templateUrl: "./master-layout.component.html",
	standalone: true,
	imports: [
		RouterOutlet,
		MatSidenavModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
	],
	styleUrl: "./master-layout.component.css",
})
export class MasterLayoutComponent implements OnInit {
	constructor() {}
	showFiller = false;

	ngOnInit(): void {}
}
