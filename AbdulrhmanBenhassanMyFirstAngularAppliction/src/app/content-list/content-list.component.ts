import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { contents, IContent } from '../data/mock-content';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contents: IContent[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getContents().subscribe(contents => {
      this.contents = contents;
    });
  }
}
