import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-fourth-content',
  templateUrl: './fourth-content.component.html',
  styleUrls: ['./fourth-content.component.scss']
})
export class FourthContentComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setupIntersectionObserver();
  }

  private setupIntersectionObserver() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        const image = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          image.classList.add('visible');
          image.style.transitionDelay = `${index * 0.2}s`;
          observer.unobserve(image);
        }
      });
    }, options);

    const images = document.querySelectorAll('.fade-in');
    images.forEach(image => observer.observe(image));
  }
}
