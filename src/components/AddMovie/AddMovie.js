import React, {useRef} from 'react';
import classes from './AddMovie.module.css';

const AddMovie = (props) => {
    const inputTitleRef = useRef('');
    const inputTextRef = useRef('');
    const inputDateRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();
        
        const movie = {
            title: inputTitleRef.current.value,
            text: inputTextRef.current.value,
            release: inputDateRef.current.value,
        }

        props.onAddMovie(movie);
    }
    return(
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label for="title">Title</label>
                <input id="title" type="text" ref={inputTitleRef}/>
            </div>

            <div className={classes.control}>
                <label for="opening_text">Opening Text</label>
                <textarea id="text" ref={inputTextRef} rows="5" columns="8"></textarea>
            </div>

            <div className={classes.control}>
                <label for="release_date">Release Date</label>
                <input id="date" type="text" ref={inputDateRef}/>
            </div>
            
            <button type="submit">Add Movie</button>
        </form>
    )
}
export default AddMovie;