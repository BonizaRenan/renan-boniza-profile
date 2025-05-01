import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-second-content',
  templateUrl: './second-content.component.html',
  styleUrls: ['./second-content.component.scss']
})
export class SecondContentComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    const elements = this.el.nativeElement.querySelectorAll('.image, .bio');
    elements.forEach((el: Element) => observer.observe(el));
  }
}
