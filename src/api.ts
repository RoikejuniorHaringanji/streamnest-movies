import axios from 'axios';
import { Movie, Genre, MovieCategory } from './types';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query?: string, category: MovieCategory = 'popular'): Promise<Movie[]> => {
  if (query) {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  }
  
  const response = await axios.get(
    `${BASE_URL}/movie/${category}?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const fetchGenres = async (): Promise<Genre[]> => {
  const response = await axios.get(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`
  );
  return response.data.genres;
};