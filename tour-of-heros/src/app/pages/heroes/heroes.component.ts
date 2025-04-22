import { Component, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { UpperCasePipe } from '@angular/common';
import { HEROES } from '../../data/heroes.data';

@Component({
  selector: 'app-heroes',
  imports: [],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  heroes = signal<Hero[]>(HEROES);



  selectedHero?: Hero;

  //ns para que es esto
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
