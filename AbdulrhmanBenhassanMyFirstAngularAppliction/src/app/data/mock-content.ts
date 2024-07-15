export interface IContent {
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  author: string;
  type: string;
  tags: string[];
  publishedDate?: Date; // Add this line
}

export const contents: IContent[] = [
  {
    title: 'Inception',
    imgSrc: 'assets/images/inception.jpg',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology...',
    author: 'Christopher Nolan',
    type: 'Movie',
    tags: ['Sci-Fi', 'Thriller'],
    publishedDate: new Date('2010-07-16'), // Add this line
    id: 1
  },
  {
    title: 'The Matrix',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality...',
    author: 'Lana Wachowski, Lilly Wachowski',
    type: 'Movie',
    tags: ['Sci-Fi', 'Action'],
    publishedDate: new Date('1999-03-31'), // Add this line
    id: 2
  },
  {
    title: 'Interstellar',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTY3OTc2Nzk2OV5BMl5BanBnXkFtZTgwNTc0OTY3MDE@._V1_.jpg',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival...',
    author: 'Christopher Nolan',
    type: 'Movie',
    tags: ['Sci-Fi', 'Adventure'],
    publishedDate: new Date('2014-11-07'), // Add this line
    id: 3
  },
  {
    title: 'The Dark Knight',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
    description: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc...',
    author: 'Christopher Nolan',
    type: 'Movie',
    tags: ['Action', 'Crime'],
    publishedDate: new Date('2008-07-18'), // Add this line
    id: 4
  },
  {
    title: 'Breaking Bad',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_.jpg',
    description: 'A high school chemistry teacher turned methamphetamine producer.',
    author: 'Vince Gilligan',
    type: 'TV Show',
    tags: ['Drama', 'Crime'],
    publishedDate: new Date('2008-01-20'), // Add this line
    id: 5
  },
  {
    title: 'Game of Thrones',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BN2IzYzBiOTQtNGZmMi00NDI5LTgxMzMtN2EzZjA1NjhlOGMxXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
    description: 'Nine noble families fight for control over the lands of Westeros.',
    author: 'David Benioff, D.B. Weiss',
    type: 'TV Show',
    tags: ['Drama'],
    publishedDate: new Date('2011-04-17'), // Add this line
    id: 6
  },
  {
    title: 'Sherlock',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg',
    description: 'A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.',
    author: 'Mark Gatiss, Steven Moffat',
    type: 'TV Show',
    tags: ['Drama'],
    publishedDate: new Date('2010-07-25'), // Add this line
    id: 7
  }
];
