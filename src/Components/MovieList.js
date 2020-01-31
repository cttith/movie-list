import React, { useState, useContext } from 'react'
import Collapsible from './Collapsible'
import {MovieContext} from '../Contexts/MovieContext'

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {movies.map( (movie) => (
                <Collapsible title={movie.title} price={movie.price}/>
            ))}
        </div>
    )
}

export default MovieList;

