import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  favorites : any = []

  constructor(private http: HttpClient ) { }


  public getCharacteres (query = '', page = 1) {
    return this.http.get<Character>(`${environment.API}/character/?name = ${query}&page=${page}`)
  }

  public getCharacter (id: number) {
    return this.http.get(`${environment.API}/character/${id}`)
  }

  public getEpisodeCharacter (id: number) {
    return this.http.get(`${environment.API}/character/${id}`)
    .pipe(
      map((res : any)  => {
        return res.episode
      }))
  }

  public getEpisodeByIds (idEpisodes : number[]) {
    return this.http.get(`${environment.API}/episode/${idEpisodes}`)
  }


  public getEpisode(id: number){
    return this.http.get(`${environment.API}/episode`)
  }

  public addFavorite(character : string){
    this.favorites.push(character)
    if(!localStorage.getItem('favoritos')){
      localStorage.setItem( "favoritos", '[]')
    }
    localStorage.setItem( "favoritos", JSON.stringify(this.favorites))
  }
}
