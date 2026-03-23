import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsServiceService {

  constructor(private http: HttpClient) { }

  fetchJobIdsURL = 'https://hacker-news.firebaseio.com/v0/jobstories.json';
  fetchJobDetailsURL = 'https://hacker-news.firebaseio.com/v0/item/';
  totalJobs: number = 0;

  getJobs(startIndex: number, limit: number) {
    return this.http.get<number[]>(this.fetchJobIdsURL).pipe(
      switchMap((ids: number[]) => {
        const batchIds = ids.slice(startIndex, startIndex + limit);
        return forkJoin(batchIds.map(id => this.getJobDetails(id)));
      })
    );
  }

  getJobDetails(id: number) {
    return this.http.get(`${this.fetchJobDetailsURL}${id}.json`);
  }
  
}
