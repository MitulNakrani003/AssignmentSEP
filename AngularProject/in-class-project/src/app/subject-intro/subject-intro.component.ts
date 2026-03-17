import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SubjectServiceService, user } from './subject-service.service';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-subject-intro',
  standalone: false,
  templateUrl: './subject-intro.component.html',
  styleUrl: './subject-intro.component.scss'
})
export class SubjectIntroComponent implements OnInit, AfterViewInit {

  constructor(private subjectservice: SubjectServiceService) { }

  @ViewChild('searchbar') searchbar!: ElementRef;

  allUsers: user[] = []
  users: user[] = []

  ngOnInit(): void {
    this.fetchUsersData()
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchbar.nativeElement, 'keyup')
      .pipe(
        debounceTime(1000),
        map(() => this.searchbar.nativeElement.value.trim().toLowerCase()),
      )
      .subscribe((name) => {
        if (name) {
          this.users = this.allUsers.filter((u) => u.name.toLowerCase().includes(name))
        }
        else {
          this.users = this.allUsers;
        }
      });
  }

  fetchUsersData() {
    this.subjectservice.getUsersData().subscribe((val) => {
      this.allUsers = val;
      this.users = val;
      console.log(val)
    });
  }

  addToFavs(u: user) {
    this.subjectservice.addToFav(u);
  }

  isInFav(u: user): boolean {
    return this.subjectservice.checkExistsInFav(u);
  }

}
