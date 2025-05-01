import { Component } from '@angular/core';

@Component({
  selector: 'app-fifth-content',
  templateUrl: './fifth-content.component.html',
  styleUrls: ['./fifth-content.component.scss']
})
export class FifthContentComponent {
  currentYear: number = new Date().getFullYear();

}
