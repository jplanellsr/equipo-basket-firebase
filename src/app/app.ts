import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './components/players/players';
import { DetailComponent } from './components/detail/detail';
import { MediaComponent } from './components/media/media';
import { Player } from './data/players';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PlayersComponent,
    DetailComponent,
    MediaComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  currentPage: 'home' | 'players' = 'home';

  selectedPlayer?: Player;

  goTo(page: 'home' | 'players') {
    this.currentPage = page;
  }

  onPlayerSelected(player: Player) {
    this.selectedPlayer = player;
  }
}
