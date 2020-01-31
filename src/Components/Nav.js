import React, { useContext } from 'react'
import { MovieContext } from '../Contexts/MovieContext'
import '../Styles/nav.css'


const Navbar = () => {
    const [movies] = useContext(MovieContext)

    let styles = {
        float: 'right',
        justifyContent: 'center',
        color: 'white',
        paddingRight: '10px',
    }
    return (
        <ul>
            <p style={styles}> Number of movies: {movies.length} </p>
        </ul>
    )

}

export default Navbar;