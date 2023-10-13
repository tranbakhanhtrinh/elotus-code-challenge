import { api } from "@/helper/axios";
import { useQuery } from "react-query";

const fetchTopRated = async ({signal}: any) => {
  try {
    return await api.get('/3/movie/top_rated',{signal}).then(res => res.data)
  } catch (error) {
    throw new Error("Fail to fetch Top Rated data.") 
  }

}
export const useFetchTopRated = () => useQuery('top_rated', fetchTopRated,{
  refetchOnWindowFocus: false
})
