import { Component, EventEmitter, HostListener, Injectable, OnInit, Output } from '@angular/core';
import { IValoresScroll } from 'src/app/interfaces/ivalores-scroll';
import { GithubService } from 'src/app/services/github-service/github.service';
import { IRepositorio } from 'src/interfaces/IRepositorio';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {

  scrollSobre: number = 0;
  scrollSkills: number = 0;
  scrollProjetos: number = 0;

  @Output() enviaPosicao: EventEmitter<IValoresScroll> = new EventEmitter();

  constructor(private githubServices: GithubService) { }

  public repositorios!: IRepositorio[];

  ngOnInit(): void {
    this.githubServices.getRepos()
      .subscribe(reps =>
        this.repositorios = reps.filter(reps => reps.name != "Joaoalen98"));

    this.scrollSobre = (document.querySelector("#sobre") as HTMLElement).offsetTop;
    this.scrollSkills = (document.querySelector("#skills") as HTMLElement).offsetTop;
    this.scrollProjetos = (document.querySelector("#projetos") as HTMLElement).offsetTop;

    this.enviaPosicao.emit({
      scrollSobre: this.scrollSobre,
      scrollSkills: this.scrollSkills,
      scrollProjetos: this.scrollProjetos,
    });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {

  }
}
