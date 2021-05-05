import { Component, OnInit } from '@angular/core';
import { movie } from '../movie';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movies: any = movie;

  constructor() { }

  ngOnInit(): void {
  }

}
