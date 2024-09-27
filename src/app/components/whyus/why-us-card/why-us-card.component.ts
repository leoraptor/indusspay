import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { whyUsType } from '../../../../type';

@Component({
  selector: 'app-why-us-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us-card.component.html',
  styleUrl: './why-us-card.component.css',
})
export class WhyUsCardComponent {
  @Input() whyData: Partial<whyUsType> = {};
}
