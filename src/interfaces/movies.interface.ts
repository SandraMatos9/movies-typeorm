import { z } from "zod"
import { allMoviesSchemasResponse, moviesSchemas, moviesSchemasResponse, moviesSchemasUpdateRequest } from "../schemas/movies.schemas"
import { DeepPartial } from "typeorm"

type  TMoviesRequest = z.infer<typeof moviesSchemas>
type TMovie=z.infer<typeof moviesSchemas>
type TMoviesResponse = z.infer <typeof moviesSchemasResponse>
type TAllMoviesResponse = z.infer<typeof allMoviesSchemasResponse>
type TMoviesPagination = {
    data:TMoviesResponse,
    nextPage: string|null,
    prevPage:string|null,
    count:number,
}
type TMoviesUpdateRequest = DeepPartial<TMoviesRequest>
export {TMoviesRequest,TMovie,TMoviesResponse,TAllMoviesResponse,TMoviesPagination,TMoviesUpdateRequest}