import { Component } from '@angular/core';
import { CardsComponent } from './cards/cards.component';
import { cardType } from '../../../type';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ourservice',
  standalone: true,
  imports: [CardsComponent, CommonModule],
  templateUrl: './ourservice.component.html',
  styleUrl: './ourservice.component.css',
})
export class OurserviceComponent {
  data: cardType[] = [
    {
      id: 1,
      img: 'gd.svg',
      bgColor: '#83FFA3',
      title: 'Graphic Design',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      id: 2,
      img: 'wd.svg',
      bgColor: '#407BFF',
      title: 'Web Development',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
    {
      id: 3,
      img: 'cw.svg',
      bgColor: '#F64B4B',
      title: 'Content Writing',
      sub: 'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.',
    },
  ];
}
