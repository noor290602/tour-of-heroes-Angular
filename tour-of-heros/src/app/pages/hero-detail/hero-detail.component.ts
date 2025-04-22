import { Component, Input, input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  imports: [FormsModule, UpperCasePipe],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent implements OnInit {

  hero = input<Hero>();

  ngOnInit(): void {
    console.log(this.hero);
  }

}
