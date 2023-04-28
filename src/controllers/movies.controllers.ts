import { Request, Response } from "express";
import { createMoviesService } from "../services/movies/createMovies.service";
import{listMoviesService} from "../services/movies/listMovies.service"
import { Movie } from "../entities";
import { TMoviesPagination, TMoviesRequest, TMoviesResponse, TMoviesUpdateRequest } from "../interfaces/movies.interface";
import idMoviesService from "../services/movies/updateMovies.service";
import { number } from "zod";
import updateMoviesService from "../services/movies/updateMovies.service";
import { deleteMoviesService } from "../services/movies/deleteMovies.service";
// import { deleteMoviesService } from "../services/movies/deleteMovies.service";

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
    // const page= req.query.page
    // const perPage=req.query.perPage
    // const order:string|undefined= String(req.query.order)
    // const sort:string|undefined= String(req.query.sort)
    const params= req.query
    const movies= await listMoviesService(params)

    return res.status(200).json(movies)
}

const updateMoviesController = async(
    req:Request,
    res:Response
):Promise<Response> => {
    const movieData:TMoviesUpdateRequest=req.body
    const movieId:number= parseInt(req.params.id)
    const newMovieData:TMoviesResponse = await updateMoviesService(movieData,movieId)
    return res.json(newMovieData)

}

const deleteMoviesController = async(
    req:Request,
    res:Response
    ): Promise<Response> =>{

    const movieId =parseInt(req.params.id)
    const deleteMovies= await deleteMoviesService(movieId)
    return res.status(204).json(deleteMovies)
}


export {createMoviesController,listMoviesController,updateMoviesController,deleteMoviesController}