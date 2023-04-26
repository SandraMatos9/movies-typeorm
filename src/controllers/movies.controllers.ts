import { Request, Response } from "express";
import { createMoviesService } from "../services/movies/createMovies.service";
import{listMoviesService} from "../services/movies/listMovies.service"
import { Movie } from "../entities";
import { TMoviesRequest } from "../interfaces/movies.interface";

const createMoviesController = async(
    req:Request,
    res:Response
    ): Promise<Response> =>{

    const moviesData:TMoviesRequest = req.body
    const newMovies= await createMoviesService(moviesData)
    return res.status(201).json(newMovies)
}

const listMoviesController = async(
    req:Request,
    res:Response
    ): Promise<Response> =>{
    const movies:TMoviesRequest[] = await listMoviesService()
    return res.status(200).json(movies)
}

const idMoviesController = async(
    req:Request,
    res:Response
):Promise<Response> => {
    return res.json()

}



export {createMoviesController,listMoviesController,idMoviesController}