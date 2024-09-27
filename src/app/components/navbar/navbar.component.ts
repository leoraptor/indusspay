import { Component, HostListener, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements AfterViewInit {
  isScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }

  ngAfterViewInit() {
    gsap.to('#navbar', {
      y: 0,
      ease: 'power1.out',
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
