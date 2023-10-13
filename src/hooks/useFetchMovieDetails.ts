import { api } from "@/helper/axios";
import { useQuery } from "react-query";

const fetchMovieDetails = async ({queryKey}: any) => {
  try {
    const movieId = queryKey[1]
    return await api.get(`/3/movie/${movieId}`).then(res => res.data)
  } catch (error) {
    throw new Error("Fail to fetch Movie details.") 
  } 
}

export const useFetchMovieDetails = (movieId: string) => useQuery(['movie_details', movieId], fetchMovieDetails,{
  refetchOnWindowFocus: false
})
