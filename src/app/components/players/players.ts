import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Player, PLAYERS } from '../../data/players';
import { PlayerFilterPipe } from '../../pipes/player-filter.pipe';

@Component({
  selector: 'app-players',
  standalone: true,
  imports: [CommonModule, FormsModule, PlayerFilterPipe],
  templateUrl: './players.html',
  styleUrl: './players.scss'
})
export class PlayersComponent {
  players: Player[] = PLAYERS;

  searchTerm: string = '';
  positionFilter: string = '';

  @Output() playerSelected = new EventEmitter<Player>();

  onSelect(player: Player) {
    this.playerSelected.emit(player);
  }
}
