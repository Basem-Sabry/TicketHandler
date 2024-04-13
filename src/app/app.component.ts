import { Component } from '@angular/core';
import { arLang } from './assets/i18n/ar';
import { enLang } from './assets/i18n/en';
import { TranslationsService } from './core/services/translations.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ticketHandler';
  constructor(private translationService: TranslationsService, private translate : TranslateService) {
    this.translationService.loadTranslations(enLang, arLang);

    this.translate.use('en');
  }
}
