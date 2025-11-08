import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../data/players';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.html',
  styleUrl: './detail.scss'
})
export class DetailComponent {
  @Input() player?: Player;
}
