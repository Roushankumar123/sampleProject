import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movie } from '../movie';

@Component({
  selector: 'app-movieoverview',
  templateUrl: './movieoverview.component.html',
  styleUrls: ['./movieoverview.component.css']
})
export class MovieoverviewComponent implements OnInit {
  movieElement: any;

  constructor(private route: ActivatedRoute) { }
  addToCart() {
    alert('Movie added to Cart Successfully');
  }


  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieElement = movie.filter(
        (movie) => movie.id === params['movieId']
      )[0];
    });
  }
  }


