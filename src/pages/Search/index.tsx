import MovieCard from '@/components/MovieCard';
import ErrorPage from "@/pages/ErrorPage"
import { useFetchSearch } from '@/hooks';
import Loading from "@/components/Loading"
import { useSearchParams } from 'react-router-dom';


const Search = () => {
  let [searchParams] = useSearchParams();
  const movieName = searchParams.get('q')
  const { data: movieList, isLoading, isFetching, isError, error } = useFetchSearch(movieName as string)
  if (isLoading || isFetching) {
    return <Loading />
  }
  if (isError && error instanceof Error) {
    return <ErrorPage error={error.message} />
  }
  const searchedMovies = movieList?.results.map((result: any) => (
    <MovieCard key={result.id}
      id={result.id.toString()}
      title={result.title}
      genre={result.genre_ids.toString()}
      posterPath={result.poster_path}
      releaseDate={result.release_date}
    />
  ))
  return (
    <section className="p-1">
      <div className="container">
        <div className="flex flex-wrap gap-1">
          {searchedMovies}
        </div>
      </div>
    </section>
  )
}

export default Search