import React, { useState, useContext } from 'react'
import { MovieContext } from '../Contexts/MovieContext'
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Fab } from '@material-ui/core';

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    // const [isExpanded, setExpanded] = useState(false)


    const updateName = (e) => {
        setTitle(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault();
        setMovies([...movies, { title: title, price: price }])
    }

    // const handleToggle = e => {
    //     e.preventDefault();
    //     setExpanded(!isExpanded)
    // }

    const useStyles = makeStyles(theme => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: 200,
            },
        },
    }));

    const classes = useStyles();

    return (
        // <ExpansionPanel expanded={isExpanded} onChange={handleToggle}>
        //     <ExpansionPanelSummary
        //         aria-controls="panel1a-content"
        //         id="panel1a-header">
        //         <Fab color="primary" aria-label="add">
        //             <AddIcon />
        //         </Fab>
        //     </ExpansionPanelSummary>
        //     <ExpansionPanelDetails style={{ backgroundColor: 'white' }}>
        <form className={classes.root} noValidate autoComplete="off" onSubmit={addMovie}>
            <TextField id="standard-basic" label="Movie Title" onChange={updateName} />
            <TextField id="standard-basic" label="Movie Price" onChange={updatePrice} />
            <Button type="submit" variant="contained" color="primary" onSubmit={addMovie}> Add Movie </Button>
            {/* <Button type="submit" > Submit </button> */}
        </form>
        //     </ExpansionPanelDetails>
        // </ExpansionPanel>

    )
}

export default AddMovie;