import { Component, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { UpperCasePipe } from '@angular/common';
import { HEROES } from '../../data/heroes.data';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

@Component({
  selector: 'app-heroes',
  imports: [UpperCasePipe, FormsModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css'
})

export class HeroesComponent {

  //heroes = signal<Hero[]>(HEROES);

  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

}
