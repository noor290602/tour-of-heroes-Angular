import { Component, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/heroes.data';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";

@Component({
  selector: 'app-heroes',
  imports: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  //heroes = signal<Hero[]>(HEROES);

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
