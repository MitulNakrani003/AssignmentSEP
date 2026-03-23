import { Component, OnInit } from '@angular/core';
import { JobsServiceService } from './jobs-service.service';

@Component({
  selector: 'app-job-board',
  standalone: false,
  templateUrl: './job-board.component.html',
  styleUrl: './job-board.component.scss'
})
export class JobBoardComponent implements OnInit {

  currentPageBeginIndex: number = 0;
  pageSize: number = 6;
  loadedJobs: any[] = [];

  constructor(private jobsService: JobsServiceService) { }

  ngOnInit() {
    this.currentPageBeginIndex = 0;
    this.jobsService.getJobs(this.currentPageBeginIndex, this.pageSize).subscribe(jobs => {
      this.loadedJobs = jobs;
    });
  }

  loadNextPage() {
    this.currentPageBeginIndex += this.pageSize;
    this.jobsService.getJobs(this.currentPageBeginIndex, this.pageSize).subscribe(jobs => {
      this.loadedJobs = jobs;
    });
  }

}
