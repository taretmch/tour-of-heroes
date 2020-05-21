import { Injectable              } from '@angular/core';
import { Observable, of          } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Hero           } from './hero';
import { HEROES         } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // Web API の URL
  private heroesUrl = 'api/heroes';

  constructor(
    private messageService: MessageService,
    private http:           HttpClient
  ) { }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
