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
}
