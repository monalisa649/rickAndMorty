import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacteresComponent } from './characteres/characteres/characteres.component';
import { CharacterComponent } from './characteres/detailCharacter/character.component';


@NgModule({
  declarations: [
    AppComponent,
    CharacteresComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
