import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StarWarsServiceService } from './star-wars-service.service';

@Component({
  selector: 'app-star-wars',
  standalone: false,
  templateUrl: './star-wars.component.html',
  styleUrl: './star-wars.component.scss'
})
export class StarWarsComponent {

  searchCharacter = new FormControl('');
  moviesList: any[] = [];

  constructor(private starwarsservice: StarWarsServiceService) {}

  onSubmit() {
    if(this.searchCharacter.value){
      this.starwarsservice.getSearchData(this.searchCharacter.value).subscribe((response)=>{
        console.log(response);
        this.moviesList = response;
      });
    }
  }



}
