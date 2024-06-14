import { Component, OnInit } from '@angular/core';
import { MovieService } from './services/movie.service';
import { IContent } from './data/mock-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AbdulrhmanBenhassanMyFirstAngularApplication';
  featuredContent?: IContent;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getContentById(1).subscribe(content => {
      this.featuredContent = content;
    });
  }
}
