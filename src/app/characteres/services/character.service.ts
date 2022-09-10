import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient ) { }


  public getCharacteres (query = '', page = 1) {
    return this.http.get<Character>(`${environment.API}/character/?name = ${query}&page=${page}`)
  }

  public getCharacter (id: number) {
    return this.http.get(`${environment.API}/character/${id}`)
  }

  public getEpisode(id: number){
    return this.http.get(`${environment.API}/episode`)
  }
}
