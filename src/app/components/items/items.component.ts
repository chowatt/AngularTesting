import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'dashboard',
  templateUrl: './app/components/items/items.html',
  providers: [ItemService]
})

export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;

  constructor(
		private itemService: ItemService,
		private route: ActivatedRoute,
		private location: Location
	) { }

  getItems(): void {
    this.itemService.getItems()
      .then(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  onNew(item: Item): void {

  }

  onSave(item: Item): void {

  }

  onEdit(item: Item): void {

  }

  onDelete(item: Item): void {

  }

}