import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { TranslationsService } from 'src/app/core/services/translations.service';
import { QRCodeModule } from 'angularx-qrcode';
import { TooltipModule } from 'primeng/tooltip';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    TranslateModule,
    ToastModule,
    QRCodeModule,
    TooltipModule

  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  constructor(private messageService: MessageService,public TranslationService: TranslationsService,) {}

  copyUrl(url: string) {
    console.log('Url',url)
    const el = document.createElement("textarea");
    el.value = url;
    el.setAttribute("readonly", "");
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    console.log(this.TranslationService.isArabic())
    this.TranslationService.isArabic() ?  this.messageService.add({severity:'success', detail:'تم نسخ الكود'}) : this.messageService.add({severity:'success', detail:'Code Copied',});
  }
}
