import express, { Request, Response } from 'express'
import { getPopularMovies } from '../utils/tmdb'
import { MovieInterface } from '../types/movie'

const router = express.Router()

router.get('/movies', async (_req: Request, res: Response<MovieInterface[] | { error: string }>) => {
  try {
    const movies: MovieInterface[] = await getPopularMovies()
    res.json(movies)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Failed to fetch movies' })
  }
})

export default router