import { Component, OnInit } from '@angular/core';
import { ItemType } from './item-type';
import { ItemTypesService } from './item-types.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({

  selector: 'item-types',
  templateUrl: './app/components/item-types/item-types.html',
  providers: [ItemTypesService]
})

export class ItemTypesComponent implements OnInit {
  itemTypes: ItemType[];
  selectedItemType: ItemType;
  errorMessage: any;

  constructor(
    private itemTypesService: ItemTypesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getItems(): void {
    this.itemTypesService.getItems()
      .subscribe(
      itemTypes => this.itemTypes = itemTypes,
      error => this.errorMessage = <any>error
      );
  }

  ngOnInit(): void {
    this.getItems();
  }

  onSelect(item: ItemType): void {
    this.selectedItemType = item;
  }

  onNew(): void {
    this.selectedItemType = new ItemType;
  }

  save(itemType: ItemType): void {
    if (itemType.id) {
      this.itemTypesService.update(itemType)
        .subscribe(item => this.selectedItemType = null, error => this.errorMessage = <any>error, () => this.selectedItemType = null);


    } else {
      this.itemTypesService.create(itemType)
        .subscribe(item => this.itemTypes.push(itemType), error => this.errorMessage = <any>error, () => this.selectedItemType = null)
    }
  }

  onEdit(itemType: ItemType): void {
    this.selectedItemType = itemType;
  }

  onDelete(item: ItemType): void {

  }

  cancel(): void {
    this.selectedItemType = null;
  }

}