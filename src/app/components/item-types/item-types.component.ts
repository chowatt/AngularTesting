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

  ngOnInit(): void {
    this.getItemTypes();
  }

  onSelect(item: ItemType): void {
    this.selectedItemType = item;
  }

  onNew(): void {
    this.selectedItemType = new ItemType;
  }

  save(itemType: ItemType): void {
    console.log(itemType);
    if (itemType.id) {
      this.itemTypesService.update(itemType)
        .subscribe(itemType => this.selectedItemType = itemType, error => this.errorMessage = <any>error, () => this.selectedItemType = null);
    } else {
      this.itemTypesService.create(itemType)
        .subscribe(itemType => this.itemTypes.push(itemType), error => this.errorMessage = <any>error, () => this.selectedItemType = null)
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

  getItemTypes(): void {
    this.itemTypesService.getItemTypes().subscribe(
      itemTypes => this.itemTypes = itemTypes,
      error => this.errorMessage = <any>error
    );
  }
}