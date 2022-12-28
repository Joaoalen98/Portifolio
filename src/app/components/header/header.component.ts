import { Component, Input, OnInit, HostListener } from '@angular/core';
import { IElementosPagina } from 'src/app/interfaces/ielementos-pagina';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() elementos!: IElementosPagina;

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let links = document.querySelectorAll(".header__ul li a");

    let posicaoHome = this.elementos.home.offsetTop - 40;
    let posicaoSobre = this.elementos.sobre.offsetTop - 40;
    let posicaoSkills = this.elementos.skills.offsetTop - 40;
    let posicaoProjetos = this.elementos.projetos.offsetTop - 40;

    console.log({
      posicaoHome,
      posicaoSobre,
      posicaoSkills,
      posicaoProjetos,
      window: window.scrollY,
    });

    if (window.scrollY >= posicaoSobre && window.scrollY < posicaoSkills) {
      links.forEach(link => link.classList.remove("ativo"));
      links[0].classList.add("ativo");

    } else if (window.scrollY >= posicaoSkills && window.scrollY < posicaoProjetos) {
      links.forEach(link => link.classList.remove("ativo"));
      links[1].classList.add("ativo");

    } else if (window.scrollY >= posicaoProjetos) {
      links.forEach(link => link.classList.remove("ativo"));
      links[2].classList.add("ativo");
    }

  }

  scrolarPara(e: any, valor: number) {
    e.preventDefault();
    window.scrollTo({ top: valor });
  }
}
