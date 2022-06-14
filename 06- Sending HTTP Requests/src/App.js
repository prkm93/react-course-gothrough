import React, { useCallback, useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('https://swapi.dev/api/films');

      if (response.status === 200) {
        const data = await response.json();
      
        const transformedMovies = data.results.map(movieData => {
        return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          }
        });
        setMovies(transformedMovies);
      } else {
        throw new Error('Something went wrong!');
      }

    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  // when movies need to be loaded on page load
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  

  // async function fetchMoviesHandler() {
  //   try {
  //     setIsLoading(true);
  //     setError(null);
  //     const response = await fetch('https://swapi.dev/api/films');

  //     if (response.status === 200) {
  //       const data = await response.json();
      
  //       const transformedMovies = data.results.map(movieData => {
  //       return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.release_date
  //         }
  //       });
  //       setMovies(transformedMovies);
  //     } else {
  //       throw new Error('Something went wrong!');
  //     }

  //   } catch (err) {
  //     setError(err.message);
  //   }
  //   setIsLoading(false);
  // }

  return (
    <React.Fragment>
      {/* <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section> */}
      <section>
        {isLoading && <div>Loading...</div>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies}/>}
        {!isLoading && movies.length === 0 && !error && <div>Found no movies.</div> }
        {!isLoading && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
