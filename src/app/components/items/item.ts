import { ItemType } from '../item-types/item-type';

export class Item {
	id: string;
	sku: string;
	description: string;
	qty: number;
	created: Date;
	modified: Date;
	item_type: ItemType;
}