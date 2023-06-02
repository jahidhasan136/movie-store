import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home/Home";
import MovieDetails from "../MovieDetails/MovieDetails";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/movies/:id',
          element: <MovieDetails></MovieDetails>,
          loader: () => fetch('https://api.tvmaze.com/search/shows?q=all')
        }
      ]
    },
  ]);


  export default router


