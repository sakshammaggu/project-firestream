'use client'

import { MovieCard } from '../MovieCard/MovieCard'

const dummyMovies = [
  {
    title: 'Stranger Things',
    thumbnail: '/images/movies/stranger-things.jpg',
    year: '2022',
    genre: 'Thriller',
  },
  {
    title: 'Dune',
    thumbnail: '/images/movies/dune.jpg',
    year: '2021',
    genre: 'Sci-Fi',
  },
  {
    title: 'Inception',
    thumbnail: '/images/movies/inception.jpg',
    year: '2010',
    genre: 'Action',
  },
  {
    title: 'Interstellar',
    thumbnail: '/images/movies/interstellar.jpg',
    year: '2014',
    genre: 'Sci-Fi',
  },
  {
    title: 'The Witcher',
    thumbnail: '/images/movies/the-witcher.jpg',
    year: '2023',
    genre: 'Fantasy',
  },
  {
    title: 'Avengers Endgame',
    thumbnail: '/images/movies/avengers-endgame.jpg',
    year: '2023',
    genre: 'Sci-Fi',
  },
]

export default function MovieSection() {
  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Top Picks for You</h2>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {dummyMovies.map((movie) => (
          <MovieCard
            key={movie.title}
            title={movie.title}
            thumbnail={movie.thumbnail}
            year={movie.year}
            genre={movie.genre}
          />
        ))}
      </div>
    </section>
  )
}
