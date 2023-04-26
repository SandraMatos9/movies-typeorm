import { z } from "zod";

const moviesSchemas = z.object({
    id: z.number(),
    name:z.string(),
    description:z.string().nullish(),
    duration:z.number(),
    price:z.number()
})

const moviesSchemasRequest = moviesSchemas
  


const moviesSchemasResponse = moviesSchemas

const allMoviesSchemasResponse = z.array(moviesSchemasResponse)


export{moviesSchemas,moviesSchemasRequest,moviesSchemasResponse,allMoviesSchemasResponse}