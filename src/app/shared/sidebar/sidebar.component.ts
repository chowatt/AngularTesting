import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { MENUITEMS } from './menu-items';

@Component({
  selector: 'my-sidebar',
  templateUrl: './app/shared/sidebar/sidebar.html'
  //template: '{{title}}'
})

export class SidebarComponent {
  title = "Main Menu";
  
   ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}