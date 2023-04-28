import { Router } from "express";
import { createMoviesController, deleteMoviesController, listMoviesController, updateMoviesController } from "../controllers/movies.controllers";
import bodyValidateMiddleware from "../middlewares/bodyValidate.middleware";
import { moviesSchemas, moviesSchemasUpdateRequest } from "../schemas/movies.schemas";
import idExistsMiddleware from "../middlewares/idExists.middleware";
import nameExistsMiddleware from "../middlewares/nameExists.middleware";

const  movieRouter = Router()

movieRouter.post(
    "",bodyValidateMiddleware(moviesSchemas),nameExistsMiddleware,
    createMoviesController)
movieRouter.get("",listMoviesController)
movieRouter.patch("/:id",bodyValidateMiddleware(moviesSchemasUpdateRequest),idExistsMiddleware,nameExistsMiddleware,updateMoviesController)
movieRouter.delete("/:id",idExistsMiddleware,deleteMoviesController)



export default movieRouter
