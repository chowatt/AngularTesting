import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ItemType } from './item-type';

@Injectable()
export class ItemTypesService {

	private headers = new Headers({ 'Content-Type': 'application/json' });
	private itemsUrl = "https://onlineapp-v2-0-chowatt33555.codeanyapp.com/item_types";

	constructor(private http: Http) { }

	getItems(): Observable<ItemType[]> {
		return this.http.get(this.itemsUrl)
			.map(this.extractData)
			.catch(this.handleError);
	}

	getItem(id: number): Observable<ItemType> {
		const url = `${this.itemsUrl}/${id}`;
		return this.http.get(url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	delete(id: number): Observable<void> {
		const url = `${this.itemsUrl}/${id}`;
		return this.http.get(url)
			.map(this.extractData)
			.catch(this.handleError);
	}

	create(itemType: ItemType): Observable<ItemType> {
		return this.http
			.post(this.itemsUrl, itemType, { headers: this.headers })
			.map(this.extractData)
			.catch(this.handleError);
	}

	update(itemType: ItemType): Observable<ItemType> {
		const url = `${this.itemsUrl}/${itemType.id}`;
		return this.http
			.put(url, itemType, { headers: this.headers })
			.map(this.extractData)
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.item_type || body.item_types || {};
	}

}