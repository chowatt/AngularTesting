import { Item } from './item';
import { ItemType } from '../item-types/item-type';

export const ITEMS: Item[] = [
	{
		id: '1',
		sku: 'abcd',
		description: 'Lorem Ipsum',
		qty: 100,
		created: new Date(),
		modified: new Date(),
		item_type: new ItemType
	}
];