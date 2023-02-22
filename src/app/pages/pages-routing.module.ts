import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';

@Component({
  selector: 'app-empty',
  styles: ['#main-navigation {z-index: 1;}'],
  template: '<div>App Empty</div>',
  encapsulation: ViewEncapsulation.None,
})
export class EmptyComponent {}

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '**',
        component: EmptyComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [EmptyComponent],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
