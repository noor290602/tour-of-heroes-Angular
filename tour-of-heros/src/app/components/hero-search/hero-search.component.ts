import { Component, inject, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  imports: [AsyncPipe, RouterLink],
  styleUrls: [ './hero-search.component.css' ]
})
export class HeroSearchComponent implements OnInit {

  heroes$!: Observable<Hero[]>; //Notice the declaration of heroes$ as an Observable!!!
  private searchTerms = new Subject<string>(); //Un Subject es una fuente de valores observables y un Observable (puedes suscribirte a un Subject como lo harías con cualquier Observable)

  heroService = inject(HeroService);

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term); //next(value) -> envia valores al Observable
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
