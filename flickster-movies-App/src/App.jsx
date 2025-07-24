import { useState ,useEffect} from 'react'
import MovieCard from './Components/MovieCard';
import './App.css';


function App() {
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    fetch(' http://localhost:3000/moviesAndSeries')
      .then(res => res.json())// fetched data is converted to json format
     .then((data)=>{
      setMovies(data);
     })
     }, []);// the empty dependecy array prevents rerendering of app component

  


  return (
    <>
     <div>
      <h1>Popular Movies</h1>
      <div className='card-container'>
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