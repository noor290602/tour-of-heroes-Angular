import { Component, inject, OnInit, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {

  hero = signal<Hero | undefined>(undefined);

  route = inject(ActivatedRoute);
  heroService = inject(HeroService);
  location = inject(Location);

  ngOnInit(): void {
    this.heroService.getHeroes();
    this.getHero();
  }

  getHero(): void {
    //route.snapshot -> static image of the route information shortly after the component was created
    //paramMap -> dictionary of route parameter values extracted from the URL. The "id" key returns the id of the hero to fetch.
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero.set(hero));
  }

  goBack(): void {
    this.location.back();
  }

}
