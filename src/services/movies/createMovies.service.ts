import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMoviesRequest, TMoviesResponse } from "../../interfaces/movies.interface";
import { hash } from "bcryptjs";
import { moviesSchemasResponse } from "../../schemas/movies.schemas";

const createMoviesService = async(moviesData:TMoviesRequest):Promise<TMoviesResponse> =>{
    const moviesRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
    
    const movies: Movie = moviesRepository.create(moviesData)
    await moviesRepository.save(movies)
    const returnMovies:TMoviesResponse = moviesSchemasResponse.parse(movies)
    return returnMovies
}


// 
export{createMoviesService}
