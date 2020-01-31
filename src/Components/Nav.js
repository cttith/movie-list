import React, { useContext } from 'react'
import { MovieContext } from '../Contexts/MovieContext'
import '../Styles/nav.css'


const Navbar = () => {
    const [movies] = useContext(MovieContext)

    let styles = {
        float: 'right',
        paddingRight: '10px',
    }
    return (
        <ul>
            <li> Home </li>
            <li style={styles}> Number of movies: {movies.length} </li>
        </ul>
    )

}

export default Navbar;