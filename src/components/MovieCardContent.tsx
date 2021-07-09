import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardContentProps {
  title: string;
  rating: string;
  runtime: string;
}

export function MovieCardContent({ title, rating, runtime }: MovieCardContentProps) {
  return (
    <div>
      <div className="movie-info">
        <span>{title}</span>
        <div className="meta">
          <div>
            <Star /> {rating}
          </div>

          <div>
            <Clock /> {runtime}
          </div>
        </div>
      </div>
    </div>
  )
}