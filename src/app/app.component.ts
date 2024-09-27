import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HerosectionComponent } from './components/herosection/herosection.component';
import { OurserviceComponent } from './components/ourservice/ourservice.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { FooterComponent } from './components/footer/footer.component';
import { CasestudyComponent } from './components/casestudy/casestudy.component';
import { OurstoryComponent } from './components/ourstory/ourstory.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HerosectionComponent,
    OurserviceComponent,
    WhyusComponent,
    TestimonialComponent,
    FooterComponent,
    CasestudyComponent,
    OurstoryComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  // ref for loader and svg path
  @ViewChild('loader') loader!: ElementRef<HTMLDivElement>;
  @ViewChild('path') path!: ElementRef<SVGPathElement>;

  initialCurve = 200;
  duration = 600;
  start!: number;

  ngAfterViewInit() {
    this.setPath(this.initialCurve);

    setTimeout(() => {
      requestAnimationFrame(this.animate.bind(this));
    }, 500);

    setTimeout(() => {
      this.loader.nativeElement.style.display = 'none';
    }, 2000);
  }

  animate(timestamp: number) {
    if (this.start === undefined) {
      this.start = timestamp;
    }
    const elapsed = timestamp - this.start;

    const newCurve = this.easeOutQuad(
      elapsed,
      this.initialCurve,
      -200,
      this.duration
    );
    this.setPath(newCurve);

    this.loader.nativeElement.style.top =
      this.easeOutQuad(elapsed, 0, -this.loaderHeight(), this.duration) + 'px';

    if (elapsed < this.duration) {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  easeOutQuad(time: number, start: number, end: number, duration: number) {
    return -end * (time /= duration) * (time - 2) + start;
  }

  loaderHeight() {
    const loaderBounds = this.loader.nativeElement.getBoundingClientRect();
    return loaderBounds.height;
  }

  setPath(curve: number) {
    const width: number = window.innerWidth;
    const height: number = this.loaderHeight();
    this.path.nativeElement.setAttributeNS(
      null,
      'd',
      `M0 0
      L${width} 0
      L${width} ${height}
      Q${width / 2} ${height - curve} 0 ${height}
      L0 0`
    );
  }
}
