import Loading from "@/components/Loading"
import MovieCard from "@/components/MovieCard"
import Pagination from "@/components/Pagination"
import { useFetchNowPlaying } from "@/hooks"
import ErrorPage from "@/pages/ErrorPage"
import { useState } from "react"

const NowPlaying = () => {
  const [pageNumber, setPageNumber] = useState<number>(1)
  const { isLoading, data: movieList, isError, error, isFetching } = useFetchNowPlaying(pageNumber.toString())
  if (isLoading || isFetching) {
    return <Loading />
  }
  if (isError && error instanceof Error) {
    return <ErrorPage error={error.message} />
  }
  const nowPlayingMovies = movieList?.results.map((result: any) => (
    <MovieCard key={result.id}
      id={result.id.toString()}
      title={result.title}
      genre={result.genre_ids.toString()}
      posterPath={result.poster_path}
      releaseDate={result.release_date}
    />
  ))
  const changePageNumber = (page: number) => {
    setPageNumber(page)
  }
  return (
    <section className="p-1">
      <div className="container">
        <div className="flex flex-wrap gap-1">
          {nowPlayingMovies}
        </div>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Pagination
            pageLength={movieList.total_pages}
            pageNumber={pageNumber}
            setPageNumber={changePageNumber}
          />
        </div>
      </div>
    </section>
  )
}

export default NowPlaying