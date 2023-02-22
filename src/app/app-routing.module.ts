import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesModule } from './pages/pages.module';
//import { AppGuard } from './core/guards/app.guard';
//import { AppConfigResolver } from './core/services/app-config.resolver';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => PagesModule,
    //canActivate: [AppGuard],
    //resolve: { AppConfigResolver },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
