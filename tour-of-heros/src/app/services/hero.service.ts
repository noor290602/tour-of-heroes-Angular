import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES } from '../data/heroes.data';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class HeroService {

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES); //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of HEROES.
    return heroes;
  }
}
