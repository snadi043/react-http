import React, {Fragment,useState, useEffect, useCallback} from 'react';
import './App.module.css';
import Movies from './components/Movies/Movies';

function App() {
  const[movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState(null);

  const FetchMovies = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try{
      const apiData = await fetch('https://swapi.dev/api/films');
      if(!apiData.ok){
        throw new Error('Something went wrong');
      }

      const resultData = await apiData.json();
      console.log(resultData);

      const transformedData = resultData.results.map(movieData => {
        return{
        id: movieData.episode_id,
        title: movieData.title,
        description: movieData.opening_crawl,
        releaseDate: movieData.release_date
      };
      
    });
    setMovies(transformedData);
    }catch (error){
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    FetchMovies();
  }, [FetchMovies]);
  
  return (
    <Fragment>
      <section>
        <button type="button" onClick={FetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length === 0 && <p>No Movies Found.</p>}
        {!isLoading && movies.length > 0 && !error && <Movies movies={movies}/>}
        {isLoading && <p>Loading....</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </Fragment>
  );
}

export default App;
