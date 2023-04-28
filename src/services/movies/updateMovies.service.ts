import { Repository } from "typeorm";
import { TMoviesResponse, TMoviesUpdateRequest } from "../../interfaces/movies.interface";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { moviesSchemasResponse } from "../../schemas/movies.schemas";
import { AppError } from "../../error";

const updateMoviesService = async(
    movieData:TMoviesUpdateRequest,
    movieId:number
    ):Promise <TMoviesResponse> =>{

    const moviesRepository:Repository<Movie>= AppDataSource.getRepository(Movie)
    const oldMovieData:Movie|null= await moviesRepository.findOneBy({
        id: movieId
    })
   
    const newMovieData:Movie = moviesRepository.create({
        ...oldMovieData,
        ...movieData,
    })

    await moviesRepository.save(newMovieData)
   
    const returnMovie:TMoviesResponse = moviesSchemasResponse.parse(newMovieData)
    return returnMovie
}

export default updateMoviesService