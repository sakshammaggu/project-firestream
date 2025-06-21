'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { MovieCard } from '../MovieCard/MovieCard'
import { MovieInterface } from '@/types/movie'

export default function MovieSection() {
  const [movies, setMovies] = useState<MovieInterface[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await axios.get('/api/movies')
        setMovies(res.data)
      } catch (err) {
        console.error('Failed to fetch movies:', err)
      }
    }

    fetchMovies()
  }, [])

  return (
    <section className="px-4 md:px-8 py-6">
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Top Picks for You</h2>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            thumbnail={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            year={(movie.release_date || '').split('-')[0]}
            genre="Action" // You can replace this with genre lookup logic later
          />
        ))}
      </div>
    </section>
  )
}