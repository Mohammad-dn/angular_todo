import { Injectable } from "@angular/core";
import CryptoJS from "crypto-js";

@Injectable({
	providedIn: "root",
})
export class LocalStorageService {
	private secretKey: string;

	constructor() {
		// Check if a secret key already exists in localStorage
		const storedKey = localStorage.getItem("__secret_key__");
		if (storedKey) {
			this.secretKey = storedKey;
		} else {
			// Generate a new secret key and store it in localStorage
			this.secretKey = CryptoJS.lib.WordArray.random(16).toString();
			localStorage.setItem("__secret_key__", this.secretKey);
		}
	}

	set(key: string, value: any): void {
		const encrypted = CryptoJS.AES.encrypt(
			JSON.stringify(value),
			this.secretKey
		).toString();
		localStorage.setItem(key, encrypted);
	}

	get(key: string): any {
		const encrypted = localStorage.getItem(key);
		if (encrypted) {
			try {
				const decryptedBytes = CryptoJS.AES.decrypt(
					encrypted,
					this.secretKey
				);
				const decryptedText = decryptedBytes.toString(
					CryptoJS.enc.Utf8
				);
				return JSON.parse(decryptedText);
			} catch (error) {
				console.error("Decryption failed:", error);
				return null;
			}
		}
		return null;
	}

	removeItem(key: string): void {
		localStorage.removeItem(key);
	}

	clear(): void {
		localStorage.clear();
	}
}
