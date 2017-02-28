import { MenuItem } from './menu-item';

export const MENUITEMS: MenuItem[] = [
	{
        id: 1,
		title: "Items",
        itemtype: "Route",
        location: "items",
        sort: 1
	},{
        id: 2,
        title: "Item Types",
        itemtype: "Route",
        location: "item-types",
        sort: 2
    },{
        id: 3,
        title: "External Site",
        itemtype: "Url",
        location: "http://howattech.com",
        sort: 3
    }
];