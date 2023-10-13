import { Link } from 'react-router-dom'
import Image from '@/components/Image'
import './MovieCard.scss'

type MovieCardProps = {
  id: string,
  title: string,
  genre?: string,
  releaseDate?: string,
  posterPath?: string,
}
const MovieCard = ({ id, title, genre, releaseDate, posterPath }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <figure>
          <Image src={`https://image.tmdb.org/t/p/w185${posterPath}`} alt={title} />
        </figure>
        <h4 className='uppercase'>{title}</h4>
      </Link>
      <p><span className="font-bold">Genre:</span> {genre}</p>
      <p><span className="font-bold">Release Date:</span> {releaseDate}</p>
    </div>
  )
}

export default MovieCard