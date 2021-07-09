import { Container } from './components/Container';
import { MovieContextProvider } from './contexts/MovieContext';

import './styles/global.scss';

export function App() {
  return (
    <MovieContextProvider>
      <Container />
    </MovieContextProvider>
  )
}