import { TranslationsService } from 'src/app/core/services/translations.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { arLang } from 'src/app/assets/i18n/ar';
import { enLang } from 'src/app/assets/i18n/en';
import { Component } from '@angular/core';
import { ChartComponent } from '../../chart/chart.component';
import { CardComponent } from '../../card/card.component';
import { TableComponent } from '../../table/table.component';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-single-ticket',
  standalone: true,
  imports:
    [
      ChartComponent,
      CardComponent,
      TableComponent,
      TranslateModule,
    TooltipModule,
    ButtonModule
    ],
  providers: [TranslationsService],
  templateUrl: './single-ticket.component.html',
  styleUrl: './single-ticket.component.scss'
})
export class SingleTicketComponent {
  lang: String = 'en'
  isArabic: boolean =false;

  constructor(private TranslationService: TranslationsService, private translate : TranslateService) {
    this.TranslationService.loadTranslations(enLang, arLang);
    this.selectLanguage('ar')

  }
  selectLanguage(lang: string) {

    this.lang = lang
    this.TranslationService.setLanguage(lang);
    this.lang = this.TranslationService.getSelectedLanguage();
    this.isArabic = this.TranslationService.isArabic();
    console.log('is',this.isArabic)
    this.translate.use(lang);
  }
}
