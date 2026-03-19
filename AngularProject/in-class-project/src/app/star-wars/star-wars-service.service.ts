import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, of, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarWarsServiceService {

  constructor(private http: HttpClient) { }

  private url = "https://swapi.dev/api/people/?search="

  searchUrls: string[] = [];
  searchMovies: string[] = [];

  getSearchData(charName: string) {
    return this.http.get(this.url + charName).pipe(
      map((val: any) => val.results[0].films),
      switchMap((filmUrls: string[]) =>
      forkJoin(filmUrls.map(url => this.getTheMovies(url)))
    ));
  }

  getTheMovies(movieurl: string) {
    return this.http.get(movieurl);
  }

}
