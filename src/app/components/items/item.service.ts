import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private itemsUrl = "https://onlineapp-v2-0-chowatt33555.codeanyapp.com/items";

	constructor(private http: Http) { }

	getItems(): Observable<Item[]> {
		return this.http.get(this.itemsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	private extractData(res: Response) {
		let body = res.json();
		console.log(body);
		return body.items || {};
	}

	getItem(id: number): Promise<Item> {
		return Promise.resolve(new Item);
	}

	delete(id: number): Promise<void> {
		return;
	}

	create(item: Item): Observable<Item> {
		return this.http
			.post(this.itemsUrl, item, { headers: this.headers })
			.map(this.extractData)
			.catch(this.handleError);
	}

	update(item: Item): Observable<Item> {
		const url = `${this.itemsUrl}/${item.id}`;
		return this.http
			.put(url, item, { headers: this.headers })
			.map(this.extractData)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}