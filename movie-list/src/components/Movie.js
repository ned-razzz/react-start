import { Link } from "react-router-dom";

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt='movie cover'></img>
      <h3>
        <Link to={`/movies/${id}`}>{title}</Link>
      </h3>
      <p>{summary}</p>
      <ul>
        {genres.map((genre, index) => (<li key={index}>{genre}</li>))}
      </ul>
    </div>
  )
}



export default Movie;