import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.scss"],
	standalone: true,
	providers: [],
	imports: [],
})
export class HeaderComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	@Output()
	onCaptionClick: EventEmitter<any> = new EventEmitter();

	handleCaptionClick(e: any) {
		this.onCaptionClick.emit(e);
	}
}
