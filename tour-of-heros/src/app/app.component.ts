import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { MessagesComponent } from "./components/messages/messages.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, MessagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tour of Heroes';
}
