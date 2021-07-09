import { useMovie } from '../contexts/MovieContext';
import { MovieCard } from './MovieCard';
import { ContentHeader } from './ContentHeader';

import '../styles/content.scss';

export function Content() {
  const { movies } = useMovie()

  return (
    <div className="container">
      <header>
        <ContentHeader />
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}