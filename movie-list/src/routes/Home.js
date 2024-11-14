import { useEffect, useState } from 'react';
import Movie from '../components/Movie';


function Home() {
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
      {isLoading ? <h1>Loading ...</h1> :
        <div>
          {movieList.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>}
    </div>
  );
}

export default Home;