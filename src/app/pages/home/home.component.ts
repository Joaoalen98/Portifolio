import { Component, OnInit } from '@angular/core';
import { IRepositorio } from 'src/interfaces/IRepositorio';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  private urlRepo = "https://api.github.com/users/Joaoalen98/repos";
  public repositorios: IRepositorio[] = [];

  ngOnInit(): void {
    this.getRepositorios();
  }

  getRepositorios(): void {
    fetch(this.urlRepo)
      .then(res => res.json())
      .then((res: IRepositorio[]) => {
        this.repositorios = res;
      })
      .catch(err => console.log(err));
  }
}
