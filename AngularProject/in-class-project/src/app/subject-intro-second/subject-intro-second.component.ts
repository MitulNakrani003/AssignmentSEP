import { Component, OnInit } from '@angular/core';
import { SubjectServiceService, user } from '../subject-intro/subject-service.service';

@Component({
  selector: 'app-subject-intro-second',
  standalone: false,
  templateUrl: './subject-intro-second.component.html',
  styleUrl: './subject-intro-second.component.scss'
})
export class SubjectIntroSecondComponent implements OnInit{

  constructor(private subjectservice: SubjectServiceService) {}

  favUsers: user[] = []

  ngOnInit(): void {
    this.subjectservice.favouriteSubject.subscribe((val)=>{
      console.log(val);
      this.favUsers = val;
    })
  }

  removefav(u: user) {
    this.subjectservice.removeFromFav(u);
  }

}
