import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi';
import MovieCard from './MovieCard';

function MovieList({genreId, index_}) {
    const [movieList, setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieByGenreId();
    }, []) 

     const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

  return (
    <div className='flex overflow-x-auto gap-8 scrollbar-hide'>
        {movieList.map((item, index)=>(
            <MovieCard movie={item}/>
        ))}
    </div>
  )

}


export default MovieList