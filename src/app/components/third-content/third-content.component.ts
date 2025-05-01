import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-third-content',
  templateUrl: './third-content.component.html',
  styleUrls: ['./third-content.component.scss']
})
export class ThirdContentComponent implements AfterViewInit {

  ngAfterViewInit() {
    // Select all the boxes
    const boxes = document.querySelectorAll('.box');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); 
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.5 }); 

  
    boxes.forEach(box => {
      observer.observe(box);
    });
  }
}
