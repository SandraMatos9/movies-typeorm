import { NextFunction,Request,Response } from "express";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const idExistsMiddleware = async (req:Request, res:Response, next:NextFunction)=>{
const reqId =parseInt(req.params.id)

let repositoryMovieId= AppDataSource.getRepository(Movie)
const  validateId= await repositoryMovieId.exist({
    where: {
        id: reqId,
    },
})


if( !validateId ){
    throw new AppError( "Movie not found", 404);
}


return next()
}
export default idExistsMiddleware

