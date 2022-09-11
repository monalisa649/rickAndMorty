import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacteresComponent } from './characteres/components/characteres/characteres.component';
import { CharacterComponent } from './characteres/components/detailCharacter/character.component';
import { CardComponent } from './characteres/components/characteres/pages/card/card.component';
import { AddFavoritesDirective } from './characteres/directives/add-favorites.directive';



@NgModule({
  declarations: [
    AppComponent,
    CharacteresComponent,
    CharacterComponent,
    CardComponent,
    AddFavoritesDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
