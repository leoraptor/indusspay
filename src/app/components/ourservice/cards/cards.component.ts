import { Component, Input } from '@angular/core';
import { cardType } from '../../../../type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  @Input() cardData: Partial<cardType> = {};
}
