import { api } from "@/helper/axios";
import { useQuery } from "react-query";

const fetchPoster = async (movieId: string) => {
  try {
    return await api.get(`/3/movie/${movieId}`).then(res => res.data)
  } catch (error) {
    throw new Error("Fail to fetch Poster.") 
  }

}
export const useFetchPoster = (movieId: string) => useQuery('poster', () => fetchPoster(movieId),{
  refetchOnWindowFocus: false
})
