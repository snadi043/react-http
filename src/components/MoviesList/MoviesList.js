import React from 'react';
import classes from './MoviesList.module.css';

const MoviesList = (props) => {
    return(
            <li className={classes.movie}>
                <h2>{props.title}</h2>
                <h3>{props.releaseDate}</h3>
                <p>{props.description}</p>
            </li>
    );
}
export default MoviesList;