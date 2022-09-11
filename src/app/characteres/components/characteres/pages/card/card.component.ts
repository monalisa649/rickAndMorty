import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { DOCUMENT } from '@angular/common';

import { CharacterService } from 'src/app/characteres/services/character.service';
import { Character } from 'src/app/characteres/models/character';
type RequestInfo = {
  next: string;
};
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  characteres: any = []
  private page = 1
  private query! : string
  info: RequestInfo = {
    next: '',
  };

  private hideScrollHeight = 200;
  private showScrollHeight = 500;
  public showGoUpButton = false;




  constructor(@Inject(DOCUMENT) private document: Document, private characterService : CharacterService, private router : Router) { }

  ngOnInit(): void {
    this.getCharacteres()
  }

  @HostListener('window:scroll', [])
  onWindowScroll():void {
    const yOffSet = window.pageYOffset;
    if ((yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) > this.showScrollHeight) {
      this.showGoUpButton = true;
    } else if (this.showGoUpButton && (yOffSet || this.document.documentElement.scrollTop || this.document.body.scrollTop) < this.hideScrollHeight) {
      this.showGoUpButton = false;
    }
  }

  public scrollDown() {
    if(this.info.next){
      this.page++
      this.getCharacteres()
    }

  }

  public scrollTop() {
    this.document.body.scrollTop = 0
    this.document.documentElement.scrollTop = 0
  }

  public getCharacteres () {
    return this.characterService.getCharacteres(this.query, this.page)
    .pipe(
      take(1)
    )
    .subscribe((res: any) => {
      console.log(res,'res')
      if (res?.results?.length) {
        const { info, results } = res;
        console.log(res,'res')
        this.characteres = [...this.characteres, ...results];
        this.info = info;
      } else {
        this.characteres = [];
      }
    })

  }

  public goDetailCharacter(id: number){
    this.router.navigate([`detalle/${id}`])
  }


  public addFavorite(character : any){

   this.characterService.addFavorite(character)
  }



}
