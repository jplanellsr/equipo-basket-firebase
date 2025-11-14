import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  // filtros
  searchTerm: string = '';
  positionFilter: string = '';

  // jugador seleccionado que viene del componente padre
  @Input() selectedPlayer?: Player;

  // evento al padre
  @Output() playerSelected = new EventEmitter<Player>();

  onSelect(player: Player) {
    this.playerSelected.emit(player);
  }

  isSelected(player: Player): boolean {
    return this.selectedPlayer?.id === player.id;
  }
}
