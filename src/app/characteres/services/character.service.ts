import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character, Result } from '../models/characterInterface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient ) { }


  public getCharacteres () {
    return this.http.get<Character>(`${environment.API}/character`).pipe(
      map((res:Character) => {
        return res.results

      }))
  }
}
