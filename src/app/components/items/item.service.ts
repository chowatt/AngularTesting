import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private itemsUrl = "https://onlineapp-v2-0-chowatt33555.codeanyapp.com/items";

	constructor(private http: Http) { }

	getItems(): Promise<Item[]> {
		return this.http.get(this.itemsUrl)
			.toPromise()
			.then(response => response.json().data as Item[])
			.catch(this.handleError);
	}

	getItem(id: number): Promise<Item> {
		return Promise.resolve(new Item);
	}

	delete(id: number): Promise<void> {
		return;
	}

	create(item: Item): Promise<Item> {
		return Promise.resolve(new Item);
	}

	update(item: Item): Promise<Item> {
		return Promise.resolve(new Item);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}