import { NextFunction,Request,Response } from "express";
import { ZodTypeAny } from "zod";
import { AppError } from "../error";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";

const nameExistsMiddleware = async (req:Request, res:Response, next:NextFunction)=>{
const reqName:any=req.body.name
if(reqName){
        const repositoryName = AppDataSource.getRepository(Movie)
    const validatedName = await repositoryName.find({
        where: {
            name: reqName,
        },
    })
    // falsy=undefined, null,0
    if( validatedName.length>0){

        throw new AppError( "Movie already exists.", 409);
    }


}

return next()
}
export default nameExistsMiddleware