import { MovieCardContent } from './MovieCardContent';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard({ title, poster, rating, runtime }: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={poster}
        alt={title}
      />

      <MovieCardContent title={title} rating={rating} runtime={runtime} />
    </div>
  )
}