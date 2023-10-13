import React from "react";
import Layout from '@/components/Layout/Layout'
import NowPlaying from "@/pages/NowPlaying";
import TopRated from "@/pages/TopRated";
import Search from "@/pages/Search";
import MovieDetails from "@/pages/MovieDetails";

export const routes = [
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        index: true,
        element: <NowPlaying />,
      },
      {
        path: "toprated",
        element: <TopRated />,
      },
      {
        path: "search/movie",
        search: '?q=',
        element: <Search />,
      },
      {
        path: 'movie',
        children: [
          {
            path: ':movieId',
            element: <MovieDetails />
          }
        ]
      }
    ],
  },
];

export const routesForNavbar = [
  {
    to: "/",
    label: "Now Playing",
    ariaLabel: "now playing"
  },
  {
    to: "/toprated",
    label: "Top Rated",
    ariaLabel: "top-rated"
  },
]
