import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetNewsHeadlineService } from './services/get-news-headline.service';

import { AppComponent } from './app.component';
import { GetNewsHeadlineComponent } from './components/get-news-headline/get-news-headline.component';


@NgModule({
  declarations: [
    AppComponent,
    GetNewsHeadlineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ GetNewsHeadlineService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
