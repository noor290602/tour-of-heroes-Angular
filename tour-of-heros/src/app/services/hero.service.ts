import { inject, Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../data/heroes.data';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })

export class HeroService {

  messageService = inject(MessageService);

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of HEROES.
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
}
