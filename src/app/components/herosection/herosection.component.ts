import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-herosection',
  standalone: true,
  imports: [],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css',
})
export class HerosectionComponent implements AfterViewInit {
  ngAfterViewInit() {
    gsap.to('#text', {
      y: 0,
      ease: 'power1.inOut',
      opacity: 1,
      delay: 1.5,
    });

    gsap.fromTo(
      '.para',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, delay: 1.5 }
    );

    gsap.to('#gsapImage', {
      y: 0,
      ease: 'power1.inOut',
      opacity: 1,
      delay: 1.5,
    });

    gsap.fromTo(
      '.para',
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, delay: 1.5 }
    );
  }
}
