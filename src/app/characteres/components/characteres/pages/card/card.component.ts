import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from 'src/app/characteres/models/characterInterface';
import { CharacterService } from 'src/app/characteres/services/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public characteres! : Result[]

  constructor(private characterService : CharacterService, private router : Router) { }

  ngOnInit(): void {
    this.getCharacteres()
  }

  public getCharacteres () {
    return this.characterService.getCharacteres()
    .subscribe((res: Result[]) => {
      this.characteres = res
      console.log(this.characteres,'result')
    })

  }

  public goDetailCharacter(id: number){
    this.router.navigate([`detalle/${id}`])
  }




}
