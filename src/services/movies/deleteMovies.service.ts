import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";



const deleteMoviesService = async (movieId: number)=>{
    
    let repositoryMovieId= AppDataSource.getRepository(Movie)
    const  deleteMovie= await repositoryMovieId.findOne({
        
        where: { id: movieId }

    })
    await repositoryMovieId.remove(deleteMovie!)
    return 
}
    
    
export{deleteMoviesService}