import axios from 'axios'
export const baseURL = 'https://api.themoviedb.org'
export const api = axios.create({
  baseURL
})

api.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDM2YTVlOTQyNTI2MzQwMDk3NDA5MTMzNjE2MTQzMiIsInN1YiI6IjVlY2Y5YTc1MjFjNGNhMDAxZmRjMzljYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HeECo4po3kDj_GA7avsoGxAU2IngtfUcKFTMtbDI98U';