import { api } from "@/helper/axios";
import { useQuery } from "react-query";

const fetchNowPlaying = async ({queryKey}: any) => {
  try {
    const page = queryKey[1]
    const response = await api.get(`/3/movie/now_playing?page=${page}`)
    return await response.data
  } catch (error) {
    throw new Error("Fail to fetch Now Playing data.") 
  }
}
export const useFetchNowPlaying = (page: string) => useQuery(['now_playing', page], fetchNowPlaying,{
  refetchOnWindowFocus: false
})
