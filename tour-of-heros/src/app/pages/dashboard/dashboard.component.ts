import { Component, OnInit, signal } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { HEROES } from '../../data/heroes.data';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  heroes = signal<Hero[]>(HEROES.slice(1,5));


}
