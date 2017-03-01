import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemTypesComponent } from './components/item-types/item-types.component';
import { Item } from './components/items/item';
import { HttpModule }    from '@angular/http';


@NgModule({
	imports:      [ BrowserModule, AppRoutingModule, HttpModule ],
	declarations: [ AppComponent, DashboardComponent, SidebarComponent, ItemsComponent, ItemTypesComponent ],
	bootstrap:    [ AppComponent, SidebarComponent ]
})
export class AppModule { }
