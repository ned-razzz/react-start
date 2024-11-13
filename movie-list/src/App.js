import { useEffect, useState } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  const loadMovies = async () => {
    const response = await (await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5`)).json();
    setMovieList(response.data.movies);
    setIsLoading(false);
  }
  useEffect(() => {
    loadMovies();
  }, []);

  return (
    <div>
      {isLoading ?
        <h1>Loading ...</h1>
        :
        <div>
          {movieList.map(movie => (
            <div key={movie.id}>
              <img src={movie.medium_cover_image} alt='movie cover'></img>
              <h3>{movie.title}</h3>
              <p>{movie.summary}</p>
              <ul>
                {movie.genres.map(genre => (<li>{genre}</li>))}
              </ul>
            </div>
          ))}
        </div>}
    </div>
  );
}

export default App;
