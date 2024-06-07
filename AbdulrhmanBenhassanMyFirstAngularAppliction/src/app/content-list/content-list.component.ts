import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  // Define the IContent interface

  // Array of IContent items
  contents: IContent[] = [
    {
      title: 'Inception',
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BZGFjOTRiYjgtYjEzMS00ZjQ2LTkzY2YtOGQ0NDI2NTVjOGFmXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
      author: 'Christopher Nolan',
      type: 'Movie',
      tags: ['Sci-Fi', 'Thriller']
    },
    {
      title: 'The Matrix',
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality...',
      author: 'Lana Wachowski, Lilly Wachowski',
      type: 'Movie',
      tags: ['Sci-Fi', 'Action']
    },
    {
      title: 'Interstellar',
      imgSrc: 'path_to_image3.jpg',
      description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival...',
      author: 'Christopher Nolan',
      type: 'Movie',
      tags: ['Sci-Fi', 'Adventure']
    },
    {
      title: 'The Dark Knight',
      imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc...',
      author: 'Christopher Nolan',
      type: 'Movie',
      tags: ['Action', 'Crime']
    }
  ];
}
