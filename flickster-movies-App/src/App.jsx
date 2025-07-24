import { useState ,useEffect} from 'react'
import MovieCard from './Components/MovieCard';
import './App.css';


function App() {
  const [movies,setMovies]=useState([]);
  

  useEffect(()=>{
    fetch(' http://localhost:3000/moviesAndSeries')
      .then(res => res.json())
     .then((data)=>{
      setMovies(data);
     })
     }, []);

  


  return (
    <>
     <div>
      <h1 className='cinematheque-heading'>The Cinematheque</h1>

      <div className='movie-grid'>
        {movies.length > 0 ? (
          movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} image={movie.Poster} />
            

            
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  
    
    </>
  )
}

export default App