import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TMoviesRequest, TMoviesResponse } from "../../interfaces/movies.interface";
import { moviesSchemas, moviesSchemasResponse } from "../../schemas/movies.schemas";
import { AppError } from "../../error";
import { number } from "zod";

const deleteMoviesService = async(moviesData:TMoviesResponse)=>{
        const userRepository: Repository<Movie> = AppDataSource.getRepository(Movie)
        movieId:number
    
        const movie: Movie | null = await userRepository.exist({
            where: {
                id: [movieId],
            },
        })
    
        if (!movie) {
            throw new AppError('User not found', 404)
        }
    
        const returnMovie: TMoviesResponse = moviesSchemas.parse(movie)
}
export{deleteMoviesService}