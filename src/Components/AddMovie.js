import React, { useState, useContext } from 'react'
import {MovieContext} from '../Contexts/MovieContext'


const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    

    const updateName = (e) => {
        setTitle(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies([...movies, {title: title, price:price}])
    }



    return(
        <form onSubmit = {addMovie}>
            <input type="text" name="title" value={title} onChange={updateName} />
            <input type="text" name="price" value={price} onChange = {updatePrice} />
            <button type="submit" > Submit </button>
        </form>
    )
}

export default AddMovie;