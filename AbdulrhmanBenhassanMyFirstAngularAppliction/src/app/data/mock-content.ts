export interface IContent {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  author: string;
  type: string;
  tags: string[];
}

export const contents: IContent[] = [
  {
    title: 'Inception',
    imgSrc: 'assets/images/inception.jpg', // Update with the correct path
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
    author: 'Christopher Nolan',
    type: 'Movie',
    tags: ['Sci-Fi', 'Thriller'],
    id: 1
  },
  {
    title: 'The Matrix',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg', // Update with the correct path
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality...',
    author: 'Lana Wachowski, Lilly Wachowski',
    type: 'Movie',
    tags: ['Sci-Fi', 'Action'],
    id: 2
  },
  {
    title: 'Interstellar',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTY3OTc2Nzk2OV5BMl5BanBnXkFtZTgwNTc0OTY3MDE@._V1_.jpg', // Update with the correct path
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival...',
    author: 'Christopher Nolan',
    type: 'Movie',
    tags: ['Sci-Fi', 'Adventure'],
    id: 3
  },
  {
    title: 'The Dark Knight',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg', // Update with the correct path
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc...',
    author: 'Christopher Nolan',
    type: 'Movie',
    tags: ['Action', 'Crime'],
    id: 4
  }
];
