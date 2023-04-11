import React from "react";
import { useState, useEffect } from "react";
import "./App.css"
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
const url ='http://www.omdbapi.com?apikey=171d48dc'
const App =() => {

const [movies , setMovies] = useState([])
const[searchTerm , setsearchTerm] =useState('')
    const searchMovies = async (title)=>{
const response = await fetch(`${url}&s=${title}`)
const data = await response.json() 
setMovies(data.Search) 

 }
 

 useEffect(()=>{
    searchMovies('')
    },[])

    return (
        <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e)=>{setsearchTerm(e.target.value)}}
            />
            <img
            src={SearchIcon}
            alt='search'
            onClick={()=>{searchMovies(searchTerm)}}
            />
            </div>
           {
            movies?.length>0 ? (
            <div className="container">
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                ))}
            </div>
            )
            :(
                <div className="empty">
                    <h2>No movies found</h2>
                    </div>
            )
        
           }

        </div>
        
    )
    
}



export default App
//171d48dc