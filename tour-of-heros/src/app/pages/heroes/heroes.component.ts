import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/heroes.data';
import { HeroDetailComponent } from "../hero-detail/hero-detail.component";
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-heroes',
  imports: [HeroDetailComponent],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit {

  ngOnInit(): void {
    this.getHeroes();
  }

  heroService = inject(HeroService);
  heroes: Hero[] = [];

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };


  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
