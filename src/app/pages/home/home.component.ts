import { Component, Injectable, OnInit } from '@angular/core';
import { GithubServices } from 'src/app/services/github-services';
import { IRepositorio } from 'src/interfaces/IRepositorio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private githubServices: GithubServices) { }

  public repositorios: IRepositorio[] = [];

  ngOnInit(): void {
    this.githubServices.getRepos()
      .subscribe(reps =>
        this.repositorios = reps.filter(reps => reps.name != "Joaoalen98"));
  }
}
