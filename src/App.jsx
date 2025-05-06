import React, { useState } from 'react';

const MovieCard = ({ movie }) => (
  <div>
    <img src={movie.posterURL} alt={movie.title} />
    <h3>{movie.title}</h3>
    <p>{movie.description}</p>
    <p>Rating: {movie.rating}</p>
  </div>
);

const MovieList = ({ movies }) => (
  <div>
    {movies.map((movie, index) => (
      <MovieCard key={index} movie={movie} />
    ))}
  </div>
);

const Filter = ({ setTitle, setRating }) => (
  <div>
    <input 
      type="text" 
      placeholder="Search by title"
      onChange={(e) => setTitle(e.target.value)} 
    />
    <input 
      type="number" 
      placeholder="Search by rating"
      onChange={(e) => setRating(e.target.value)} 
    />
  </div>
);

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(title.toLowerCase()) && 
    (rating ? movie.rating >= rating : true)
  );

  return (
    <div>
      <Filter setTitle={setTitle} setRating={setRating} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({ title: 'New Movie', description: 'A great movie', posterURL: 'https://via.placeholder.com/150', rating: 5 })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;
