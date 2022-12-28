import { Component } from '@angular/core';
import { IValoresScroll } from './interfaces/ivalores-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  valoresScroll!: IValoresScroll;

  teste(valores: IValoresScroll) {
    this.valoresScroll = valores;
  }
} 
