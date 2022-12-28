import { Component } from '@angular/core';
import { IElementosPagina } from './interfaces/ielementos-pagina';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  elementos!: IElementosPagina;

  teste(valores: IElementosPagina) {
    this.elementos = valores;
  }
} 
