import { Component } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  // Define the IContent interface
  export interface IContent {
    title: string;
    imgSrc: string;
    description: string;
    author: string;
    type: string;
    tags: string[];
  }

  // Array of IContent items
  contents: IContent[] = [
    {
      title: 'Inception',
      imgSrc: 'path_to_image1.jpg',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
      author: 'Christopher Nolan',
      type: 'Movie',
      tags: ['Sci-Fi', 'Thriller']
    },
    {
      title: 'The Matrix',
      imgSrc: 'path_to_image2.jpg',
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
      imgSrc: 'path_to_image4.jpg',
      description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc...',
      author: 'Christopher Nolan',
      type: 'Movie',
      tags: ['Action', 'Crime']
    }
  ];
}
