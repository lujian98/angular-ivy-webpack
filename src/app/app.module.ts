import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { SunI18nModule } from 'sunbird-seven-ui/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
//import { CoreModule } from './core/core.module';
import { WebpackTranslateLoader } from './webpack-translate-loader';
//import { SecurityModule } from './security/security.module';
import { SunThemeModule, SunOverlayModule, SunAuthModule } from 'sunbird-seven-ui';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en-US',
      extend: true,
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader,
      },
    }),
    //CoreModule,
    SunThemeModule.forRoot(),
    //SecurityModule.forRoot(),
    SunAuthModule.forRoot(),
    SunI18nModule.forRoot(),
    SunOverlayModule.forRoot(),
    AppRoutingModule,
  ],
  declarations: [AppComponent],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

