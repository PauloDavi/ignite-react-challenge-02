import { useMovie } from "../contexts/MovieContext"

export function ContentHeader() {
  const { selectedGenre } = useMovie()

  return (
    <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
  )
}