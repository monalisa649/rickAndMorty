import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  public episodes : any
  constructor(private characterService : CharacterService, private route : ActivatedRoute ) { }

  ngOnInit(): void {
    this.getIdParams()
    this.getEpisode(this.id)
    this.getEpisodeCharacter()
  }

  /**
   * Obtiene el parametro de la ruta activa y consulta todos los personajes
   */
  getIdParams() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      this.getCharacter(this.id)

    })
  }
/**
 *Obtiene la información del personaje
 * @param id id del personaje
 */
  public getCharacter(id: number){
    this.characterService.getCharacter(this.id)
    .subscribe((res: any)=> {
      this.character = res
    })
  }

  /**
   * Obtiene arreglo id de episodios del personaje
   */

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

/**
 * Consulta la información de cada uno de los episodios
 * @param idsEpidoes ids de los episodios
 */

  public getEpidosesByIds(idsEpidoes : number []) {
    this.characterService.getEpisodeByIds(this.idsEpisodes)
      .subscribe((res : any) => {
        this.episodes = res
      })
  }


  public getEpisode (id:number){
    this.characterService.getEpisode(this.id)
    .subscribe()

  }

}
