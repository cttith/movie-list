import React, { useContext } from 'react'
import Collapsible from './Collapsible'
import { MovieContext } from '../Contexts/MovieContext'
import AddMovie from './AddMovie'
import { Fab, Modal } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import '../Styles/collapsible.css'

const MovieList = () => {
    const [movies] = useContext(MovieContext)
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const useStyles = makeStyles(theme => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }));

    const classes = useStyles();
    return (
        <div className="parent-collapsible">
            <div className="div-collapsible">
                {movies.map((movie) => (
                    <Collapsible title={movie.title} price={movie.price} key={movie.title} />
                ))}
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={open}
                    onClose={handleClose}
                    className={classes.modal}
                >
                    <div className={classes.paper}>
                        <AddMovie />
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default MovieList;

