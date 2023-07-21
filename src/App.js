import React, {Fragment,useState} from 'react';
import './App.module.css';
import Movies from './components/Movies/Movies';

const DUMMY_MOVIES = [
  {
  id: 1,
  title: 'Some title 1',
  releaseDate: '2022-07-03',
  description: 'some description regarding some film title -1',
  },
  {
    id: 2,
    title: 'Some title 2',
    releaseDate: '2022-04-03',
    description: 'some description regarding some film title -2',
  },
  {
    id: 3,
    title: 'Some title 3',
    releaseDate: '2023-07-03',
    description: 'some description regarding some film title -3',
  }  
];

function App() {
  const[movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState(null);

  async function FetchMovies(){
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
  }
  
  return (
    <Fragment>
      <section>
        <button type="button" onClick={FetchMovies}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length === 0 && <p>No Movies Found.</p>}
        {!isLoading && movies.length > 0 && !error && <Movies movies={movies}/>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading....</p>}
        

      </section>
    </Fragment>
  );
}

export default App;
