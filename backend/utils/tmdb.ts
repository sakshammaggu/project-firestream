import dotenv from 'dotenv'
dotenv.config()

import axios from "axios"

const BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3'
const ACCESS_TOKEN = process.env.TMDB_ACCESS_TOKEN
const API_KEY = process.env.TMDB_API_KEY


export const getPopularMovies = async () => {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      headers: {
        Authorization: ACCESS_TOKEN, 
        'Content-Type': 'application/json',       
      },
      params: {
        api_key: API_KEY,                         
        language: 'en-US',
        page: 1,
      },
    })
    return response.data.results
}