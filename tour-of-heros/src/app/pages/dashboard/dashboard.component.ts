import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HeroService } from '../../services/hero.service';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from "../../components/hero-search/hero-search.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  heroes = signal<Hero[]>([]);

  heroService = inject(HeroService);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes.set(heroes.slice(1, 5))); //cogemos solo los 4 primeros
  }
}
