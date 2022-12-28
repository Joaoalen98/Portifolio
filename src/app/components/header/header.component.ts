import { Component, Input, OnInit, AfterContentChecked, ChangeDetectorRef, HostListener } from '@angular/core';
import { IValoresScroll } from 'src/app/interfaces/ivalores-scroll';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() valoresScroll: IValoresScroll = {
    scrollSobre: 0,
    scrollSkills: 0,
    scrollProjetos: 0
  };

  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let links = document.querySelectorAll(".header__ul li a");

    if (window.scrollY >= this.valoresScroll.scrollSobre - 50 && window.scrollY < this.valoresScroll.scrollSkills - 50) {
      links.forEach(link => link.classList.remove("ativo"));
      links[0].classList.add("ativo");

    } else if (window.scrollY >= this.valoresScroll.scrollSkills - 50 && window.scrollY < this.valoresScroll.scrollProjetos - 50) {
      links.forEach(link => link.classList.remove("ativo"));
      links[1].classList.add("ativo");

    } else if (window.scrollY >= this.valoresScroll.scrollProjetos - 50) {
      links.forEach(link => link.classList.remove("ativo"));
      links[2].classList.add("ativo");
    }
  }

  scrolarPara(e: any, valor: number) {
    e.preventDefault();
    window.scrollTo({ top: valor });
  }
}
