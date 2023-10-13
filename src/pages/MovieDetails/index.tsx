import Image from '@/components/Image'
import Loading from "@/components/Loading"
import { useFetchMovieDetails } from '@/hooks'
import ErrorPage from "@/pages/ErrorPage"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useParams } from 'react-router-dom'
import './MovieDetails.scss'

const MovieDetails = () => {
  const { movieId } = useParams()
  const { data, isFetching, isLoading, isError, error } = useFetchMovieDetails(String(movieId))
  const genre = data?.genres.map((genre: { name: string }) => genre.name).join(', ')
  const languages = data?.spoken_languages.map((lang: { english_name: string }) => lang.english_name).join(', ')
  if (isLoading || isFetching) {
    return <section className='movie-details p-1'>
      <div className="container">
        <div className="mb-1 info">
          <div className='w-full'>
            <Skeleton height={32} duration={1} />
            <Skeleton count={3} height={21} duration={1} />
          </div>
        </div>
        <Skeleton count={2} height={21} duration={1} />
      </div>
    </section>
  }
  if (isError && error instanceof Error) {
    return <ErrorPage error={error.message} />
  }
  return (
    <>
      {
        data &&
        <section className='movie-details p-1'>
          <div className="container">
            <div className="gap-1 mb-1 info">
              <figure>
                <Image src={`https://image.tmdb.org/t/p/w185/${data.poster_path}`} alt={data.title} />
              </figure>
              <div className='w-full'>
                <h2 className='uppercase'>{data.title}</h2>
                <hr />
                <p>
                  <span className='font-bold'>Genre: </span>
                  {genre}
                </p>
                <p>
                  <span className='font-bold'>Running Time: </span>{data.runtime} mins
                </p>
                <p>
                  <span className='font-bold'>Languages: </span>
                  {languages}
                </p>
              </div>
            </div>
            <h3 className='uppercase font-bold'>Overview</h3>
            <p>
              {data.overview}
            </p>
          </div>
        </section>
      }
    </>
  )
}

export default MovieDetails