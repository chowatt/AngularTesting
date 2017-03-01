import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MenuItem } from './menu-item';
import { MENUITEMS } from './menu-items';
import { MenuItemService } from './menu-item.service';

@Component({
	selector: 'my-sidebar',
	templateUrl: './app/shared/sidebar/sidebar.html',
	providers: [MenuItemService]
	//template: '{{title}}'
})


export class SidebarComponent implements OnInit {

	title = "Main Menu";
	menuItems: MenuItem[];
	selectedItem: MenuItem;

	constructor(
		private menuItemService: MenuItemService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.getMenuItems();
	}

	getMenuItems(): void {
		this.menuItemService.getMenuItems().then(menuItems => this.menuItems = menuItems);
	}

	goBack(): void {
		this.location.back();
	}
}