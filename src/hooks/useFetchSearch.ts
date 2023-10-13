import { api } from "@/helper/axios";
import { useQuery } from "react-query";

const fetchSearch = async ({queryKey}: any) => {
  try {
    const movieName = queryKey[1]
    return await api.get(`/3/search/movie?query=${movieName}`).then(res => res.data)
  } catch (error) {
    throw new Error("Fail to Search movie.") 
  }
  
}

export const useFetchSearch = (movieName: string) => useQuery(['search', movieName], fetchSearch,{
  refetchOnWindowFocus: false
})
