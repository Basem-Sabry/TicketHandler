import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ButtonModule} from 'primeng/button';
import { TranslationsService } from 'src/app/core/services/translations.service';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    TranslateModule,
    TooltipModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule

  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  constructor(public TranslationService: TranslationsService,) {}
  originalTickets: any[] = [
    {
      user: {
        name: 'احمد محمود',
        enName:'Ahmed Mahmoud',
        phone: '0123456789',
        img: null,
      },
      ticket_num: 'C-101',
      ticketValue: '40',
      cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , سينما فور سيزون',
      cinemasEn: 'Cinema Masr , Arab mall , Borg ElAtnan , Sraya elqema , Cinema FourSeasons',

      number_persons: '1',
      number_purchases: '5',
      ticket: {
        name: '45',
        extension: 'Pdf',
        size : '9mb'
      }
    },
    {
      user: {
        name: ' مهند محمد',
        enName:'Mohand mohamed',

        phone: '01228896547',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFq_O4Hn8W7WKdakJMSYMpPLi-EhhYpxHIEVcAXBxMvQ&s'
      },
      ticket_num: 'C-102',
      ticketValue: '100',
      cinemas: 'سينما مصر , مول العرب , برج الأطنان ',
      cinemasEn: 'Cinema Masr , Arab mall , Borg ElAtnan ',

      number_persons: '77',
      number_purchases: '8',
      ticket: {
        name: '45',
        extension: 'Pdf',
        size : '9mb'
      }
    },
    {
      user: {
        name: 'كامل اشرف',
        enName:'Kamel Ashraf',

        phone: '01226648579',
        img: null
      },
      ticket_num: 'C-103',
      ticketValue: '25',
      cinemas: 'سينما مصر  , سرايا القبة , سينما فور سيزون',
      cinemasEn: 'Cinema Masr , Sraya elqema , Cinema FourSeasons',

      number_persons: '9',
      number_purchases: '36',
      ticket: {
        name: '45',
        extension: 'Pdf',
        size : '9mb'
      }
    }
  ];
  tickets: any[] = [
    {
      user: {
        name: 'احمد محمود',
        enName:'Ahmed Mahmoud',
        phone: '0123456789',
        img: null,
      },
      ticket_num: 'C-101',
      ticketValue: '40',
      cinemas: 'سينما مصر , مول العرب , برج الأطنان , سرايا القبة , سينما فور سيزون',
      cinemasEn: 'Cinema Masr , Arab mall , Borg ElAtnan , Sraya elqema , Cinema FourSeasons',

      number_persons: '1',
      number_purchases: '5',
      ticket: {
        name: '45',
        extension: 'Pdf',
        size : '9mb'
      }
    },
    {
      user: {
        name: ' مهند محمد',
        enName:'Mohand mohamed',

        phone: '01228896547',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFq_O4Hn8W7WKdakJMSYMpPLi-EhhYpxHIEVcAXBxMvQ&s'
      },
      ticket_num: 'C-102',
      ticketValue: '100',
      cinemas: 'سينما مصر , مول العرب , برج الأطنان ',
      cinemasEn: 'Cinema Masr , Arab mall , Borg ElAtnan ',

      number_persons: '77',
      number_purchases: '8',
      ticket: {
        name: '45',
        extension: 'Pdf',
        size : '9mb'
      }
    },
    {
      user: {
        name: 'كامل اشرف',
        enName:'Kamel Ashraf',

        phone: '01226648579',
        img: null
      },
      ticket_num: 'C-103',
      ticketValue: '25',
      cinemas: 'سينما مصر  , سرايا القبة , سينما فور سيزون',
      cinemasEn: 'Cinema Masr , Sraya elqema , Cinema FourSeasons',

      number_persons: '9',
      number_purchases: '36',
      ticket: {
        name: '45',
        extension: 'Pdf',
        size : '9mb'
      }
    }
  ];
  onSearch(searchVal: any) {
    let searchText = searchVal.target.value
    if (searchText.trim().length > 0) {
     const filteredTickets =  this.originalTickets.filter(
        (singleTicket: any) =>
          singleTicket?.user?.name?.trim().toLowerCase().includes(searchText.trim().toLowerCase()) ||
          singleTicket?.user?.enName?.trim().toLowerCase().includes(searchText.trim().toLowerCase()) ||
          singleTicket?.user?.phone?.trim().includes(searchText.trim()) ||
          singleTicket?.number_purchases.trim().includes(searchText.trim()) ||
          singleTicket?.number_persons.trim().includes(searchText.trim()) ||
          singleTicket?.ticketValue.trim().includes(searchText.trim()) ||
          singleTicket?.ticket_num.trim().toLowerCase().includes(searchText.trim().toLowerCase()) ||
          singleTicket?.cinemasEn.trim().toLowerCase().includes(searchText.trim().toLowerCase()) ||
          singleTicket?.cinemas.trim().toLowerCase().includes(searchText.trim().toLowerCase())







      );
      this.tickets = filteredTickets
    }
    else {
      this.tickets = this.originalTickets
    }

  }
  shortName(name:any) {
    let firstCharFirstWord = name?.split(" ")[0]?.split("")[0]
     let firstCharSecondWord = name?.split(" ")[1]?.split("")[0]


    return firstCharFirstWord && firstCharSecondWord ? firstCharFirstWord + '' + firstCharSecondWord : ''

  }
  wrapText(text: string , appCutText:number) {
    if (text.split(',').length >= appCutText) {
      const truncatedText = text.split(',').slice(0,appCutText) + '....';
      return truncatedText;
    }
    else {
      return text.split(',')[0];

    }
  }
}
