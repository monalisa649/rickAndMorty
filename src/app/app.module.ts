import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacteresComponent } from './characteres/components/characteres/characteres.component';
import { CharacterComponent } from './characteres/components/detailCharacter/character.component';
import { CardComponent } from './characteres/components/characteres/pages/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacteresComponent,
    CharacterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
