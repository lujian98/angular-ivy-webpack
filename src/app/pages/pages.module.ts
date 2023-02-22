import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SunNavbarModule,
  SunMenuModule,
  SunDropdownModule,
  SunSearchModule,
  SunLayoutModule,
  SunIconModule,
  SunPopoverModule,
  SunPanelModule,
} from 'sunbird-seven-ui';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    SunDropdownModule,
    SunIconModule,
    SunLayoutModule,
    SunMenuModule,
    SunNavbarModule,
    SunSearchModule,
    SunPopoverModule,
    SunPanelModule,
    PagesRoutingModule,
  ],
  declarations: [PagesComponent],
})
export class PagesModule {}
