import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Player } from '../../data/players';
import { SafeUrlPipe } from '../../pipes/safe-url.pipe';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [CommonModule, SafeUrlPipe],
  templateUrl: './media.html',
  styleUrl: './media.scss'
})
export class MediaComponent {
  @Input() player?: Player;
}
