import Button from "@/components/Button"
import Loading from "@/components/Loading"
import MovieCard from "@/components/MovieCard"
import { useFetchNowPlaying } from "@/hooks"
import ErrorPage from "@/pages/ErrorPage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
  const prevBtn = () => {
    setPageNumber(page => page - 1)
  }
  const nextBtn = () => {
    setPageNumber(page => page + 1)
  }
  return (
    <section className="p-1">
      <div className="container">
        <div className="flex flex-wrap gap-1">
          {nowPlayingMovies}
        </div>
        <div className="flex items-center justify-center gap-1 mt-1">
          <Button type="button" onClick={prevBtn} disabled={pageNumber === 1}>
            Prev
          </Button>
          <Button type="button" onClick={nextBtn} disabled={pageNumber === movieList.length}>
            Next
          </Button>
        </div>
      </div>
    </section>
  )
}

export default NowPlaying