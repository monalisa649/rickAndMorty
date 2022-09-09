import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characteres',
  templateUrl: './characteres.component.html',
  styleUrls: ['./characteres.component.scss']
})
export class CharacteresComponent implements OnInit {

  constructor( private characterService : CharacterService) { }

  ngOnInit(): void {
    this.getCharacteres()
  }

  public getCharacteres () {
    return this.characterService.getCharacteres()
    .subscribe(res => {
      console.log(res, 'res')
    })

  }
}