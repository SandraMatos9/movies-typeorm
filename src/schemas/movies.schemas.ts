import { z } from "zod";

const moviesSchemas = z.object({
    name:z.string().max(50),
    description:z.string().nullish(),
    duration:z.number().int().positive(),
    price:z.number().int().positive()
})

const moviesSchemasResponse = moviesSchemas.extend({
    id: z.number()

})
  
//schema update
const moviesSchemasUpdateRequest =moviesSchemas.partial()
  


const allMoviesSchemasResponse = z.array(moviesSchemasResponse)


export{moviesSchemas,moviesSchemasResponse,allMoviesSchemasResponse,moviesSchemasUpdateRequest}