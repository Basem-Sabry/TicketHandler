import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {  TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationsService } from './core/services/translations.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,

    TranslateModule.forRoot({
      defaultLanguage: 'en'
  }),
  ],
  providers: [TranslationsService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
