import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TAllMoviesResponse } from "../../interfaces/movies.interface";
import { allMoviesSchemasResponse } from "../../schemas/movies.schemas";


export const listMoviesService = async({
    page="1",
    perPage="5",
    sort="id",
    order="asc"
}) =>{
    const moviesRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
  
   const sorts:string = sort ==='price'||sort==='duration'?sort:"id"
    let orders:string =  order==='asc'||order==='desc'?order:'asc'
  
    if(sorts === 'id'){
        orders = 'asc'
    }
    const pages:any = Number(page) >0 ? Number(page):1
    const perPages:any = Number(perPage) > 0 && Number(perPage) <=5 ? Number(perPage):5

     const  moviesList = await moviesRepository.findAndCount({
            skip:(pages-1)*perPages,
            take:perPages,
            order:{[sorts]:orders},

    })


   const returnMovies:TAllMoviesResponse = allMoviesSchemasResponse.parse(moviesList[0])
//retorno: prevPage,nextPage,data e count
   return{
    prevPage: pages-1>0?`http://localhost:3000/movies?page=${Number(pages)-1}&perPage=${perPages}`:null,
    
    nextPage: pages * perPages >= moviesList[1] ? null : `http://localhost:3000/movies?page=${Number(pages)+1}&perPage=${perPages}`,
    count:moviesList[1],
    data: returnMovies,
   }
}

export default listMoviesService