import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `<h1>Hello {{name}}</h1>`,
})
export class DashboardComponent  { name = 'Dashboard'; }