import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { IElementosPagina } from 'src/app/interfaces/ielementos-pagina';
import { GithubService } from 'src/app/services/github-service/github.service';
import { IRepositorio } from 'src/interfaces/IRepositorio';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Injectable()
export class HomeComponent implements OnInit {

  @Output() enviaElementos: EventEmitter<IElementosPagina> = new EventEmitter();

  constructor(private githubServices: GithubService) { }

  public repositorios!: IRepositorio[];

  ngOnInit(): void {
    this.githubServices.getRepos()
      .subscribe(reps =>
        this.repositorios = reps.filter(reps => reps.name != "Joaoalen98"));

    this.enviaElementos.emit({
      home: document.querySelector("#home") as HTMLElement,
      sobre: document.querySelector("#sobre") as HTMLElement,
      skills: document.querySelector("#skills") as HTMLElement,
      projetos: document.querySelector("#projetos") as HTMLElement,
    });
  }
}
