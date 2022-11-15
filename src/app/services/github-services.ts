import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IRepositorio } from "src/interfaces/IRepositorio";


@Injectable({
    providedIn: 'root'
})
export class GithubServices {
    private urlRepo = "https://api.github.com/users/Joaoalen98/repos";

    constructor(private http: HttpClient) { }

    getRepos(): Observable<IRepositorio[]> {
        return this.http.get<IRepositorio[]>(this.urlRepo);
    }
}