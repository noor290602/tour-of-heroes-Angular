import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-heroes',
  imports: [RouterLink],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];

  heroService = inject(HeroService);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
