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
  errorMessage: any;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getItems(): void {
    this.itemService.getItems()
      .subscribe(
      items => this.items = items,
      error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  onNew(item: Item): void {
    this.selectedItem = new Item;
  }

  save(item: Item): void {
    if (item.id) {
      this.itemService.update(item)
        .subscribe(item => this.selectedItem = null, error => this.errorMessage = <any>error, () => this.selectedItem = null);


    } else {
      this.itemService.create(item)
        .subscribe(item => this.items.push(item), error => this.errorMessage = <any>error, () => this.selectedItem = null)
    }
  }

  onEdit(item: Item): void {
    this.selectedItem = item;
  }

  onDelete(item: Item): void {

  }

  cancel(): void {
    this.selectedItem = null;
  }

}