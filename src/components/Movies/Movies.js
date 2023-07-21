import React from 'react';
import MoviesList from '../MoviesList/MoviesList';
import classes from './Movies.module.css';

const Movies = (props) => {
    return(
            <ul className={classes.movies}>
                {props.movies.map(movie => <MoviesList
                    key={movie.id}
                    title={movie.title}
                    description={movie.description}
                    releaseDate={movie.releaseDate}
                    />
                    )}
            </ul>
    );
}
export default Movies;
