import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { MENUITEMS } from './menu-items';

@Injectable()
export class MenuItemService {
    getMenuItems(): Promise<MenuItem[]> {
        return Promise.resolve(MENUITEMS);
    }
}