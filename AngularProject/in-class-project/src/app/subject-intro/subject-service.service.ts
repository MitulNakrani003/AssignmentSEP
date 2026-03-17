import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface user {
  id: number,
  name: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  favouriteSubject = new Subject<user[]>();
  currentFavourites: user[] = [];

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<user[]> {
    return this.http.get<user[]>(this.url);
  }

  addToFav(u: user) {
    const exists = this.currentFavourites.some((item) => item.id === u.id);

    if (!exists) {
      this.currentFavourites.push(u);
      this.favouriteSubject.next(this.currentFavourites);
    }
  }

  removeFromFav(u: user) {
    const newFav = this.currentFavourites.filter((item) => item.id !== u.id)
    this.favouriteSubject.next(newFav)
    this.currentFavourites = newFav;
  }

}
