import { Component } from '@angular/core';
import { AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-experience-content',
  templateUrl: './experience-content.component.html',
  styleUrls: ['./experience-content.component.scss']
})
export class ExperienceContentComponent implements AfterViewInit{
 @ViewChildren('step') stepElements!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
  // Check if the screen width is less than 768px (mobile)
  if (window.innerWidth < 768) {
    return; // Skip animation on mobile
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  this.stepElements.forEach((step) => {
    observer.observe(step.nativeElement);
  });
  }
}
