import { Repository } from "typeorm";
import { TMoviesResponse } from "../../interfaces/movies.interface";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";

const idMoviesService = async(movieId):Promise <TMoviesResponse> =>{
    const moviesRepository:Repository<Movie>= AppDataSource.getRepository(Movie)
    const movie = await moviesRepository.findOne({})
}

export default idMoviesService