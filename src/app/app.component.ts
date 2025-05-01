import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'renan-boniza-port-folio';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const cubeCount = 15;
    const container = document.getElementById('cube-container');

    if (!container) return;

    for (let i = 0; i < cubeCount; i++) {
      const cube = this.renderer.createElement('div');
      this.renderer.addClass(cube, 'cube');

      const left = Math.random() * 90 + 5;
      const top = Math.random() * 90 + 5;
      const delay = i * 0.1;

      this.renderer.setStyle(cube, 'left', `${left}vw`);
      this.renderer.setStyle(cube, 'top', `${top}vh`);
      this.renderer.setStyle(cube, 'animationDelay', `${delay}s`);

      this.renderer.appendChild(container, cube);
    }
  }
}
