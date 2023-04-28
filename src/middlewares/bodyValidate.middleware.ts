import { NextFunction,Request,Response } from "express";
import { ZodTypeAny } from "zod";

const bodyValidateMiddleware =(schema: ZodTypeAny) =>(req:Request, res:Response, next:NextFunction)=>{
const validatedName=schema.parse(req.body)
req.body = validatedName

return next()
}
export default bodyValidateMiddleware