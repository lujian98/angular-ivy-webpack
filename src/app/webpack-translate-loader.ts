import { Observable, of } from 'rxjs';
import { TranslateLoader } from '@ngx-translate/core';

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(require(`../assets/i18n/${lang}.json`));
  }
}
