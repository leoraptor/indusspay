import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-ourstory',
  standalone: true,
  imports: [],
  templateUrl: './ourstory.component.html',
  styleUrl: './ourstory.component.css',
})
export class OurstoryComponent implements AfterViewInit {
  //ref of img div
  @ViewChild('yellowBox', { static: false }) yellowBox!: ElementRef;
  private timeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
    repeatDelay: 1,
    paused: true,
  });

  ngAfterViewInit(): void {
    this.setupTimeline();
  }

  private setupTimeline() {
    this.timeline.to(this.yellowBox.nativeElement, {
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
      rotation: 360,
      x: '-400',
    });

    this.timeline.to(this.yellowBox.nativeElement, {
      y: 150,
      rotation: 360,
      scale: 2,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut',
    });
  }

  togglePlayPause() {
    if (this.timeline.paused()) {
      this.timeline.play();
    } else {
      this.timeline.pause();
    }
  }
}
