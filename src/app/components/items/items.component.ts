import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'dashboard',
  templateUrl: './app/components/items/items.html',
  providers: [ItemService]
})

export class ItemsComponent implements OnInit {
  items: Item[];
  selectedItem: Item;

  constructor(private itemService: ItemService) { }

  getItems(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }
}