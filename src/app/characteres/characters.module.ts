import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CharacteresComponent } from './characteres.component';
import { CharacterComponent } from './pages/detailCharacter/character.component';
import { RouterCharacterModule } from './router-character';
import { CardComponent } from './pages/card/card.component';



@NgModule({
  declarations: [
    CharacteresComponent,
    CharacterComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    RouterCharacterModule
  ],
  exports : [
    CardComponent
  ]
})
export class CharactersModule { }
