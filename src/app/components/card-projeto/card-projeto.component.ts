import { Component, Input, OnInit } from '@angular/core';
import { IRepositorio } from 'src/interfaces/IRepositorio';

@Component({
  selector: 'app-card-projeto',
  templateUrl: './card-projeto.component.html',
  styleUrls: ['./card-projeto.component.scss']
})
export class CardProjetoComponent implements OnInit {

  @Input() repositorio!: IRepositorio;

  constructor() { }

  ngOnInit(): void {

  }

}
