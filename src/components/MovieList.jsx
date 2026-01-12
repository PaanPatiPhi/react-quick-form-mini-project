import movies from "../data/MovieData";

function MovieList({ movie, setMovie, error, stage }) {
  return (
    <div className="input-container">
      <label>เลือกหนังที่คุณชอบ</label>
      <div className={`movie-list ${stage}`}>
        {movies.map((item) => (
          <label key={item.title} className="movie-item">
            <input
              type="radio"
              value={item.title}
              checked={movie === item.title}
              onChange={(e) => setMovie(e.target.value)}
            />
            <div className="movie-item-detail">
              <p>
                {item.title} ({item.year})
              </p>
              <p className="movie-director">Director: {item.director}</p>
            </div>
          </label>
        ))}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default MovieList;
