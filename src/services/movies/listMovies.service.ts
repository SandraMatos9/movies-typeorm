import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TAllMoviesResponse, TMoviesRequest, TMoviesResponse } from "../../interfaces/movies.interface";
import { allMoviesSchemasResponse, moviesSchemasResponse } from "../../schemas/movies.schemas";

const listMoviesService = async():Promise<Movie[]> =>{
    const moviesRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
   const movies: Movie[] = await moviesRepository.find()
   const returnMovies:TAllMoviesResponse = allMoviesSchemasResponse.parse(movies)

   return returnMovies
}
export default listMoviesService