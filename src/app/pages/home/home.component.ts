import { Component, Injectable, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github-service/github.service';
import { IRepositorio } from 'src/interfaces/IRepositorio';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private githubServices: GithubService) { }

  public repositorios!: IRepositorio[];

  ngOnInit(): void {
    this.githubServices.getRepos()
      .subscribe(reps =>
        this.repositorios = reps.filter(reps => reps.name != "Joaoalen98"));
  }
}
