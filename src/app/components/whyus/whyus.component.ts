import { Component } from '@angular/core';
import { whyUsType } from '../../../type';
import { CommonModule } from '@angular/common';
import { WhyUsCardComponent } from './why-us-card/why-us-card.component';

@Component({
  selector: 'app-whyus',
  standalone: true,
  imports: [CommonModule, WhyUsCardComponent],
  templateUrl: './whyus.component.html',
  styleUrl: './whyus.component.css',
})
export class WhyusComponent {
  data: whyUsType[] = [
    {
      id: 1,
      img: 'icon1.png',
      title: 'Dedicated project manager',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      id: 2,
      img: 'icon2.png',
      title: 'Organized tasks',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      id: 3,
      img: 'icon3.png',
      title: 'Easy feedback sharing',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      id: 4,
      img: 'icon4.png',
      title: 'Never miss deadline',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
  ];
}
