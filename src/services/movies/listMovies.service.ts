import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Movie } from "../../entities";
import { TAllMoviesResponse } from "../../interfaces/movies.interface";
import { allMoviesSchemasResponse } from "../../schemas/movies.schemas";


//requisição: page, perpage,sort,order
export const listMoviesService = async({
    page="1",
    perPage="5",
    sort="asc",
    order="id"
}) =>{
    const moviesRepository:Repository<Movie> = AppDataSource.getRepository(Movie)
  
   const sorts:string = sort ==='price'||sort==='duration'?sort:"id"
    const orders:string =  order==='asc'||order==='desc'?order:'asc'
  
    // O tipo de ordenação (order) só deve funcionar caso sort seja enviado.
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
    
    nextPage: `http://localhost:3000/movies?page=${Number(pages)+1}&perPage=${perPages}`,
    data: returnMovies,
    count:moviesList[1]
   }
}

export default listMoviesService