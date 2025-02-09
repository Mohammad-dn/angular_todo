import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterOutlet } from "@angular/router";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
@Component({
	selector: "app-root",
	imports: [RouterOutlet, FooterComponent, HeaderComponent, FormsModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	message: string = "";

	handleShowAlert(e: any) {
		alert("show allert in app component");
	}
}
