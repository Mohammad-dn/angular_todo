import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
	selector: "app-footer",
	templateUrl: "./footer.component.html",
	styleUrls: ["./footer.component.scss"],
	standalone: true,
	providers: [],
	imports: [FormsModule],
})
export class FooterComponent implements OnInit {
	inputMessage: any;

	@Output() messageEvent = new EventEmitter<string>();

	sendMessage() {
		this.messageEvent.emit(this.inputMessage);
	}
	ngOnInit(): void {}
}
