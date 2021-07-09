import { useMovie } from '../contexts/MovieContext';
import { Button } from './Button';
import { SideBarHeader } from './SideBarHeader';

import '../styles/sidebar.scss';

export function SideBar() {
  const { genres, selectedGenreId, handleClickButton } = useMovie()

  return (
    <nav className="sidebar">
      <SideBarHeader />

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}