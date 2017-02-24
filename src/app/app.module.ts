import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ItemsComponent } from './components/items/items.component';


@NgModule({
	imports:      [ BrowserModule, AppRoutingModule ],
	declarations: [ AppComponent, DashboardComponent, SidebarComponent, ItemsComponent ],
	bootstrap:    [ AppComponent, SidebarComponent ]
})
export class AppModule { }
