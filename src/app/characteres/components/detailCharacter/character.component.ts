import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character';
import { Result } from '../../models/characterInterface';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {
  public character! :any
  public id! : number
  public idsEpisodes : any

  constructor(private characterService : CharacterService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.getIdParams()

    this.getEpisode(this.id)
    this.getEpisodeCharacter()
  }

  getIdParams() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.getCharacter(this.id)

    })
  }

  public getCharacter(id: number){
    this.characterService.getCharacter(this.id)
    .subscribe((res: any)=> {
      this.character = res
      console.log(this.character,'character')
    })
  }

  public getEpisodeCharacter(){
    this.characterService.getEpisodeCharacter(this.id)
    .subscribe(res =>{
      let array = res
      this.idsEpisodes = array.map((element : any) => {
        return element.split('/').pop().slice('')
       })
       this.idsEpisodes = this.idsEpisodes.map((element:string) => parseInt(element));
       this.getEpidosesByIds(this.idsEpisodes)
    })
  }

  public getEpidosesByIds(idsEpidoes : number []) {
    this.characterService.getEpisodeByIds(this.idsEpisodes)
      .subscribe(console.log)
  }


  public getEpisode (id:number){
    this.characterService.getEpisode(this.id)
    .subscribe(console.log)
  }

}
