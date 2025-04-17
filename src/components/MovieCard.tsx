import React from 'react';
import { Star } from 'lucide-react';
import { Movie, Genre } from '../types';

interface MovieCardProps {
  movie: Movie;
  genres: Genre[];
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, genres }) => {
  const movieGenres = genres
    .filter((genre) => movie.genre_ids.includes(genre.id))
    .map((genre) => genre.name)
    .join(', ');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-96 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop';
        }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 line-clamp-1">{movie.title}</h3>
        <div className="flex items-center mb-2">
          <Star className="w-5 h-5 text-yellow-400 mr-1" />
          <span>{movie.vote_average.toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">{movieGenres}</p>
        <p className="text-sm text-gray-500 line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;