import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { GameService } from './game.service';
import { StatisticsService } from './statistics.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    GameService,
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
