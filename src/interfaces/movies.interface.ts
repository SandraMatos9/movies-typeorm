import { z } from "zod"
import { allMoviesSchemasResponse, moviesSchemas, moviesSchemasResponse } from "../schemas/movies.schemas"

type  TMoviesRequest = z.infer<typeof moviesSchemas>
type TMovie=z.infer<typeof moviesSchemas>
type TMoviesResponse = z.infer <typeof moviesSchemasResponse>
type TAllMoviesResponse = z.infer<typeof allMoviesSchemasResponse>

export {TMoviesRequest,TMovie,TMoviesResponse,TAllMoviesResponse}