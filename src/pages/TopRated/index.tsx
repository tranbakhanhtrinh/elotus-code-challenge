import MovieCard from "@/components/MovieCard"
import Loading from "@/components/Loading"
import ErrorPage from "@/pages/ErrorPage"
import { useFetchTopRated } from "@/hooks"

const TopRated = () => {
  const { isLoading, data: movieList, isFetching, isError, error } = useFetchTopRated()
  if (isLoading || isFetching) {
    return <Loading />
  }
  if (isError && error instanceof Error) {
    return <ErrorPage error={error.message} />
  }
  const topRatedMovies = movieList?.results.map((result: any) => (
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
          {topRatedMovies}
        </div>
      </div>
    </section>
  )
}

export default TopRated