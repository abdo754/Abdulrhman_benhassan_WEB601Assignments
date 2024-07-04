import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { IContent } from '../data/mock-content';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {
  content: IContent | undefined;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.movieService.getContentById(id).subscribe(content => this.content = content);
  }
}
