import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TAllMoviesResponse, TMoviesPagination, TMoviesRequest, TMoviesResponse } from "../../interfaces/movies.interface";
import { allMoviesSchemasResponse, moviesSchemasResponse } from "../../schemas/movies.schemas";
import { string } from "pg-format";
import { number } from "zod";
import { Request,Response, request } from "express";

//requisição: page, perpage,sort,order
export const listMoviesService = async(
    page:number|undefined,
    perPage:number|undefined,
    sort:string|undefined,
    order:string|undefined
    ) =>{
    const moviesRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
    let moviesList:Movie[]|undefined
   
    const sortQuery = sort
   const sorts:string = sortQuery ==='price'||sortQuery==='duration'? sortQuery : "id"

    const orderQuery = order
    const orders:string =  orderQuery==='asc'||orderQuery==='desc'?orderQuery:'asc'
  
    // O tipo de ordenação (order) só deve funcionar caso sort seja enviado.

    const pageBy:any= page
    const pages:any =  pageBy>0 ? pageBy:1

    const perPageBy:any= perPage
    const perPages:any =  perPageBy > 0 || perPageBy <= 5 ? perPageBy:5


    if(!orderQuery){
        !sortQuery
    }

    if(!page||!perPage){
        moviesList=await moviesRepository.find({order:{[sorts]:orders}}) 
    } else{
        moviesList = await moviesRepository.find({
            skip:(page-1)*perPage,
            take:perPage,
            order:{[sorts]:orders},

    })}
    console.log(moviesList)
    console.log("teste")

   const returnMovies:TAllMoviesResponse = allMoviesSchemasResponse.parse(moviesList)
//retorno: prevPage,nextPage,data e count
   return{
    prevPage:`http://localhost:3000/movies/?sort=price&order=desc&page=${Number(page)-1}&perPage=3`,
    nextPage:`http://localhost:3000/movies/?sort=price&order=desc&page=${Number(page)+1}&perPage=3`,
    data: returnMovies,
    count:10
   }
}

export default listMoviesService